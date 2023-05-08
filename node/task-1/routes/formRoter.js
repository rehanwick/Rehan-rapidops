const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");
const downloadController = require("../controller/formDownloadController");
const downloadControllerIMg = require("../controller/downloadController");

router.get("/", formController.renderForm);
router.post("/result", formController.saveFormData);
router.post("/download", downloadController.download);
router.get("/viewImg", downloadControllerIMg.viewImg);

module.exports = router;
