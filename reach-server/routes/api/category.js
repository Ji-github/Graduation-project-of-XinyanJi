const express = require("express");
const router = express.Router();
const category = require("../../services/category");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/list",
    asyncHandler(async (req, res) => {
      return await category.categoryList(req.query);
    })
);

router.get(
    "/insert",
    asyncHandler(async (req, res) => {
        return await category.categoryInsert(req.query);
    })
);

router.get(
    "/delete",
    asyncHandler(async (req, res) => {
      return await category.categoryDelete(req.query.id);
    })
);

module.exports = router;