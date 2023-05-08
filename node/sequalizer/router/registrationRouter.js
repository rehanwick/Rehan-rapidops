const express = require("express");
const router = express.Router();
const registrationController = require("../controller/registrationController");

router.post("/registraion", registrationController.registraion);

module.exports = router;
