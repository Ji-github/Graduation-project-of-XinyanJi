const express = require("express");
const router = express.Router();
const powerList = require("../../services/powerList");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/list",
    asyncHandler(async (req, res) => {
      return await powerList.getPowerList();
    })
);

module.exports = router;