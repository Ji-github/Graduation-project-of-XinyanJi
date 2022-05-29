const express = require("express");
const router = express.Router();
const user = require("../../services/user");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/in",
    asyncHandler(async (req, res) => {
      return await user.userLogin(req.query.loginId);
    })
);

router.get(
    "/register",
    asyncHandler(async (req, res) => {
        return await user.userRegister(req.query.loginId);
    })
);

module.exports = router;