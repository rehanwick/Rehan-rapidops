const { json } = require("express");
const fs = require("fs");
const path = require("path");
const dir = "./data";
const servicesRegister = require("../services/servicesRegister");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const renderForm = (req, res) => {
  res.status(200).render("form");
};

const saveFormData = async (req, res) => {
  let filePath = path.join(__dirname, "../data/data.json");
  content = { firstName: req.body.firstName, lastName: req.body.lastName };
  let users;
  let showData;
  try {
    showData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    showData.push(content);
    fs.writeFileSync(filePath, JSON.stringify(showData));
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  try {
    const arrDate = req.body.lastName.split("-");
    await servicesRegister.addUser(
      req.body.firstName,
      `${arrDate[0]}/${arrDate[1]}/${arrDate[2]}`
    );
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  try {
    users = await servicesRegister.getUser();
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  res.status(201).render("list", { data: showData, dataDb: users });
};

module.exports = {
  renderForm,
  saveFormData,
};
