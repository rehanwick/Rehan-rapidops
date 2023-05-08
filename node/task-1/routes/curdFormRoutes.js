const { application } = require("express");
const express = require("express");
const router = express.Router();
const curdFormController = require("../controller/curdFormController");

router.delete("/delete/:id", curdFormController.deleteUser);

module.exports = router;
