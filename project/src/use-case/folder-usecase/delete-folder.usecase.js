module.exports = function makeDeleteFolderByIdUsecase({
  Joi,
  deleteFolderById,
}) {
  return async function deleteFolderByIdUsecase({ id }) {
    try {
      validInput({ id });
      await deleteFolderById({ id });
      console.log(id);
    } catch (err) {
      throw err;
    }
  };
  function validInput(input) {
    const schema = Joi.object().keys({
      id: Joi.string().required(),
    });
    const { error } = schema.validate(input);
    if (error) {
      throw error;
    }
  }
};
