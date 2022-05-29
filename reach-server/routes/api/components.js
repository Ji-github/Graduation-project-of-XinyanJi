const express = require("express");
const router = express.Router();
const Components = require("../../services/components");
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
        return await Components.componentsList(req.query);
    })
);

router.get(
    "/register",
    asyncHandler(async (req, res) => {
        if(req.query.id) {
            return await Components.componentsUpdate(req.query.id, req.query)
        } else {
            return await Components.componentSave(req.query);
        }
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
        return await Components.componentsInfo(req.query.id);
    })
);

module.exports = router;