const crudServises = require("../servises/crudFolder");

const creatFolder = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const folderExis = await crudServises.searchingFolder(name);
    if (folderExis[0][0]) {
      console.log(folderExis);
      throw "error";
    }
  } catch (err) {
    res.status(409).json({
      status: "error",
      message: "folder name already exist",
    });
    return;
  }
  try {
    await crudServises.addingFolder(name, userId);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  res.status(202).json({
    status: "sucess",
    msg: "created",
  });
};

const deleteFolder = async (req, res) => {
  const {id , name } = req.body;
  const arr = ['inbox', 'sent' , 'Archived' , 'Outbox' , 'Trash'] ; 
  if(arr.includes(name))
  {
    res.status(400).json({
      status : 'error' , 
      message : `can't delete the folder ${name}`
    })
    return ; 
  }
  try {
    await crudServises.deletingFolder(id);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  res.status(204).json({
    status: "succes",
    msg: "deleted",
  });
};

const updatingFolder = async (req, res) => {
  const { id, name } = req.body;
  try {
    await crudServises.updatingFolder(id, name);
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err,
    });
  }
  res.status(204).json({
    status: "sucss",
    msg: "updated",
  });
};

module.exports = {
  creatFolder,
  updatingFolder,
  deleteFolder,
};
