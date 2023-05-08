const serviceCurd = require("../services/servicesCurd");

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await serviceCurd.deleuser(id);
  } catch (err) {
    res.status(500).json({
      status: error,
      msg: err,
    });
  }
  res.status(202).send("USer deleted");
};

module.exports = {
  deleteUser,
};
