module.exports = function makeShowUsersUsecase({ Joi, showUsers }) {
  return async function showUsersUsecase() {
    try {
      const users = await showUsers();
      return users ; 
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};
