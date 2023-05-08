const serviceDefaultFolder = require("../servises/defaultFolder");

const registraion = async (req, res) => {
  const { name, email, password } = req.body;
  let userID;
  try {
  
    const user = await serviceDefaultFolder.serchingUserId(email);
    if (user) {
      throw new Error('user alrady Exist');
    }
    await serviceDefaultFolder.registrationFolder(name, password, email);
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err,
    });
  }
  try {
    
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  try {
    userID = await serviceDefaultFolder.serchingUserId(email);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  try {
    await serviceDefaultFolder.addingDefaultFolder(userID.id);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  res.status(201).json({
    status: "sucess",
    msg: `user with name = ${name} , email = ${email} is created and default folder created `,
  });
};

module.exports = {
  registraion,
};
