module.exports = function makeCreatUserUsecase({
  Joi,
  creatUser,
  creatFolderUsecase , 
  findUserByEmailUsecase ,
  kafkaCreatFolder
}) {
  return async function creatUserUsecase({name, email}) {
    try {
      validInput({name , email}); 
      const user = await findUserByEmailUsecase({ name, email });
      if (user.length != 0) {
        throw new Error(`User already exist with email ${email}} `);
      }
      await creatUser({name , email});
      const [{id}] = await findUserByEmailUsecase({
        name,
        email,
      });
      
      kafkaCreatFolder(`${id}`) ; 

      const arr = ["inbox", "sent", "Archived", "Outbox", "Trash"];
      for (let folderName of arr) {
        // await creatFolderUsecase({ id , name:folderName });
      }
    } catch (e) {
      throw e;
    }
  }
  function validInput(input)
  {
    const schema = Joi.object().keys({
      name : Joi.string().required() , 
      email : Joi.string().email().required() , 
      password : Joi.string().min(8).required()
    })
    const {error} = schema.validate(input) ; 
    if(error) { throw error}
  }
};
