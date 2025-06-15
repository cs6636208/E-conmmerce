const express = require("express");
const router = express.Router();

// @ENDPOINT http://localhost:5000/api/category
router.get("/category", (req, res) => {
  // code
  res.send("Hello Category");
});

module.exports = router;
