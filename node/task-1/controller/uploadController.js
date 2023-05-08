const fs = require("fs");
const path = require("path");

const uploadView = (req, res) => {
  res.render("uploadView");
};

const uploadImg = (req, res) => {
  res.send("Image Uploaded");
};

const uploadFile = (req, res) => {
  res.send("File Uploaded");
};

module.exports = {
  uploadView,
  uploadImg,
  uploadFile,
};
