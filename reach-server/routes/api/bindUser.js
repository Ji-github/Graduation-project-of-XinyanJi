const express = require("express");
const router = express.Router();
const bindUser = require("../../services/bindUser");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/list",
    asyncHandler(async (req, res) => {
      return await bindUser.getbindList();
    })
);

module.exports = router;