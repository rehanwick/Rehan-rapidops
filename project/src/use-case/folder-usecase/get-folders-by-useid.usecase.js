module.exports = function makeGetFoldersByUserIdUsecase({
  Joi,
  getFolderByUserId,
}) {
  return async function getFoldersByUserIdUsecase({ userId }) {
    try {
      validInput({ userId });
      return await getFolderByUserId({ userId });
    } catch (error) {
      throw error;
    }
    function validInput(input) {
      const schema = Joi.object().keys({
        userId: Joi.string().required(),
      });

      const { error } = schema.validate(input);

      if (error) {
        throw error;
      }
    }
  };
};
