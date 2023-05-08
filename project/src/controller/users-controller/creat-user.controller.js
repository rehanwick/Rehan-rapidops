function makeCreatUserController({
  Joi,
  creatUserUsecase,
}) {
  return async function creatUserController(req, res) {
    try {
      //input validation
      validInput(req.body);
      const { name, email, password } = req.body;
      await creatUserUsecase({ name, email, password });
      res.status(201).json({
        status: "success",
        msg: "user created",
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        msg: e.message,
      });
    }
  };

  function validInput(body) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(body);
    if (error) {
      throw error;
    }
  }
}

module.exports = makeCreatUserController;
