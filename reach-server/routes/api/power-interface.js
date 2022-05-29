const express = require("express");
const router = express.Router();
const powerInterface = require("../../services/power-interface");
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
        return await powerInterface.PowerInterfaceList(req.query);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        req.query.powerids = req.query.powerids.join(',');
        return await powerInterface.PowerInterfaceInsert(req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
      return await powerInterface.PowerInterfaceDelete(req.query.id);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
        req.query.powerids = req.query.powerids.join(',');
        return await powerInterface.PowerInterfaceUpdate(req.query.id, req.query);
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
      return await powerInterface.PowerInterfaceInfo(req.query.id);
    })
);

module.exports = router;