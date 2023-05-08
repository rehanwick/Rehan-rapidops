const express = require("express");
const multer = require("multer");
const path = require("path");
const uploadController = require("../controller/uploadController");
const uploadrouter = express.Router();

const publicPathImg = path.join(__dirname, "../public/img");
const publicPathFile = path.join(__dirname, "../public/file");

const uploadImg = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, publicPathImg);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
      );
    },
  }),
});
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, publicPathFile);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
      );
    },
  }),
});

uploadrouter.get("/upload", uploadController.uploadView);
uploadrouter.post(
  "/uploadImg",
  uploadImg.single("img"),
  uploadController.uploadImg
);
uploadrouter.post(
  "/uploadFile",
  uploadFile.single("file"),
  uploadController.uploadFile
);

module.exports = uploadrouter;
