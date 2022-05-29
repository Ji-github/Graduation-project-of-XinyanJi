const express = require("express");
const router = express.Router();
const Business = require("../../services/business");
const Admin = require("../../services/user");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/list",
    asyncHandler(async (req, res) => {
        const keys = Object.keys(req.query);
        keys.forEach(item => {
            if(req.query[item] === '') {
                delete req.query[item];
            }
        })
        return await Business.powerBusinessList(req.query);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        return await Business.powerBusinessInsert(req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
        return await Business.powerBusinessDelete(req.query.id);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
        return await Business.powerBusinessUpdate(req.query.id, req.query);
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
      return await Business.powerBusinessInfo(req.query.id);
    })
);

router.get(
    "/search",
    asyncHandler(async (req, res) => {
      return await Business.powerUserSearch(req.query.name);
    })
);

module.exports = router;