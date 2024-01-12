const { getFootballers } = require("../db/queries/footballers.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getFootballers().then((data) => {
    return res.status(200).json(data);
  });
});

module.exports = router;
