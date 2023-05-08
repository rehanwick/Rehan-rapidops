module.exports = function makeCreatFolderUsecase({
     Joi, 
     creatFolder 
}) {

  return async function creatFolderUsecase({name , id}) {
    try {
      validInput({name ,id }) ; 
      await creatFolder({name , id})
    } catch (e) {
      throw e;
    }
  }

  function validInput(input) {
    const schema = Joi.object().keys({
      name : Joi.string().required() , 
      id : Joi.required() 
    })
    const {error} = schema.validate(input) ; 
    if(error) {throw error }
  }
};
