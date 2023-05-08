module.exports = function makeFindUseByEmailUsecase({ Joi, getUserByEmail }) {
  return async function findUserByEmailUsecase({ email }) {
    let user;
    try {
      inputValid({email}) ; 
      user = await getUserByEmail({ email });
    } catch (err) {
      throw err;
    }
    return user;

    function inputValid({email}) 
    {
      const schema = Joi.object().keys({
        email : Joi.string().email().required()
      }) 
      const {error} =schema.validate({email}) ; 
      if(error) {throw error}
    }    
  };
};
