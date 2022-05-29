const express = require("express");
const router = express.Router();
const powerUser = require("../../services/power-user");
const Admin = require("../../services/user");
const { asyncHandler, getErr } = require("../getSendResult");

router.get(
    "/list",
    asyncHandler(async (req, res) => {
        const keys = Object.keys(req.query);
        keys.forEach(item => {
            if(req.query[item] === '') {
                delete req.query[item];
            }
        })
        console.log(req.query);
        return await powerUser.powerUserList(req.query);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        console.log(req.query)
        const result = await Admin.userLogin(req.query.opuser)
        const searchResult = await Admin.userLogin(req.query.name)
        req.query.roles = req.query.roles.join(',');
        if(searchResult) {
            res.send(getErr('当前用户已存在'));
            throw Error();
        }
        if(result.status < Math.max(...req.query.roles)) {
            res.send(getErr('权限不够'));
            throw Error();
        } else {
            return await powerUser.powerUserInsert(req.query);
        }
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
        return await powerUser.powerUserDelete(req.query.id);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
        req.query.roles = req.query.roles.join(',');
        const result = await Admin.userLogin(req.query.name)
        if(result.status < Math.max(...req.query.roles)) {
            res.send(getErr('权限不够'));
            throw Error();
        } else {
            return await powerUser.powerUserUpdate(req.query.id, req.query);
        }
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
      return await powerUser.powerUserInfo(req.query.id);
    })
);

router.get(
    "/search",
    asyncHandler(async (req, res) => {
      return await powerUser.powerUserSearch(req.query.name);
    })
);

module.exports = router;