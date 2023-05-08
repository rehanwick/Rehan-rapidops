function makeShowUsersController({
  Joi,
  showUsersUsecase
}) {
  return async function showUsersController(req, res) {
    try {
  
      const users = await showUsersUsecase();
      return res.status(200).json({
        status: "success",
        msg: users,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        msg: err.message,
      });
    }
  };
}

module.exports = makeShowUsersController;
