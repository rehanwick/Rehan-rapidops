const express = require("express");
const router = express.Router();
const downloadController = require("../controller/downloadController");

router.get("/download", downloadController.downloadView);
router.post("/downloadImg", downloadController.downloadImg);

module.exports = router;
