const express = require("express");
const router = express.Router();
const crudFolder = require("../controller/crudController");
const validateJoi = require("../middlewear/joiMiddlewear");

router.post("/creatFolder", crudFolder.creatFolder);

router.delete("/deleteFolder", validateJoi.validationIdName ,  crudFolder.deleteFolder);

router.patch("/updateFolder", validateJoi.validationIdName ,  crudFolder.updatingFolder);

module.exports = router;
