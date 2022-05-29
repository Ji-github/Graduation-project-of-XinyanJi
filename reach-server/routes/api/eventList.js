const express = require("express");
const router = express.Router();
const eventList = require("../../services/eventList");
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
      return await eventList.EventListList(req.query);
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
        return await eventList.EventListInfo(req.query.id);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        return await eventList.EventListInsert(req.query);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
        return await eventList.EventListUpdate(req.query.id, req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
      return await eventList.EventListDelete(req.query.id);
    })
);

module.exports = router;