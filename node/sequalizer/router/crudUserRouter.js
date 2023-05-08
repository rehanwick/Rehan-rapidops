const express = require("express");
const router = express.Router();

const userController = require("../controller/curdUserController");

router.delete("/delUser", userController.delUser);
router.patch("/updateUser", userController.updUserName);

module.exports = router;
