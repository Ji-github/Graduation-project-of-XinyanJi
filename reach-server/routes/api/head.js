const express = require("express");
const router = express.Router();
const head = require("../../services/head");
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
      return await head.HeadList(req.query);
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
        return await head.HeadInfo(req.query.id);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        return await head.HeadInsert(req.query);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
        return await head.HeadUpdate(req.query.id, req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
      return await head.HeadDelete(req.query.id);
    })
);

module.exports = router;