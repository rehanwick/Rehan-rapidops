function makeUpdateUserNameController({ Joi, updateUserNameUsecase }) {
  return async function updateUserNameController(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      validInput({ id, name });
      await updateUserNameUsecase({ id, name });
      res.status(201).json({
        status: "success",
        msg: `username updated of id ${id} to ${name} `,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "error",
        msg: err.message,
      });
    }
  };
  function validInput(input) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      id: Joi.string().required(),
    });
    const { error } = schema.validate(input);
    if (error) {
      throw error;
    }
  }
}

module.exports = makeUpdateUserNameController;
