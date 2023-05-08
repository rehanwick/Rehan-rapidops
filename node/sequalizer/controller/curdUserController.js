const curdUserServ = require("../servises/crudUser");

const delUser = async (req, res) => {
  const { id } = req.body;
  let user;
  try {
    user = await curdUserServ.searchUser(id);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
  if (!user) {
    res.status(404).json({
      status: "error",
      message: `User with id = ${id} does not exist `,
    });
  }
  try {
    await curdUserServ.delUser(id);
  } catch (err) {
    res.status(409).json({
      status: "error",
      message: err,
    });
  }
  res.status(200).json({
    status: "success",
    message: `user with id = ${id} is deleted`,
  });
};

const updUserName = async (req, res) => {
  const { id, name } = req.body;
  let user;
  try {
    user = await curdUserServ.searchUser(id);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
  if (!user) {
    res.status(404).json({
      status: "error",
      message: `there is no user with id ${id}`,
    });
    return;
  }
  try {
    await curdUserServ.updateUser(id, name);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
  res.status(200).json({
    status: "success",
    message: `User name changes to ${name}`,
  });
};

const updtUserPswd = async (req, res) => {
  const { id, password } = req.body;
  let user;
  try {
    await curdUserServ.searchUser(id);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
  if (!user) {
    res.status(404).json({
      status: "error",
      message: `No user with id ${id}`,
    });
  }
  try {
    await curdUserServ.updateUser(id, password);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
  res.status(200).json({
    status: "error",
    message: `the user with id ${id} password changed`,
  });
};

module.exports = {
  delUser,
  updUserName,
  updtUserPswd,
};
