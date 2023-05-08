module.exports = function makeDeleteUserUsecase({ Joi, deleteUser }) {
  return async function deleteUserUsecase({ id }) {
    try {
      validInput({id}) ; 
      await deleteUser({ id });
    } catch (err) {
      throw err;
    }
  }
  function validInput(input){
    const schema = Joi.object().keys({
      id : Joi.string().required() 
    })
    const {error} = schema.validate(input) ; 
    if(error) {throw error }
  }  ;
};
