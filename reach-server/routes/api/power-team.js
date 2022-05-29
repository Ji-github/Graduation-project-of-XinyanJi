const express = require("express");
const router = express.Router();
const powerTeam = require("../../services/power-team");
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
        return await powerTeam.powerTeamList(req.query);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        return await powerTeam.powerTeamInsert(req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
      return await powerTeam.powerTeamDelete(req.query.id);
    })
);

router.get(
    "/update",
    asyncHandler(async (req, res) => {
      return await powerTeam.powerTeamUpdate(req.query.id, req.query);
    })
);

router.get(
    "/info",
    asyncHandler(async (req, res) => {
      return await powerTeam.powerTeamInfo(req.query.id);
    })
);

module.exports = router;