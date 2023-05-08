module.exports = function makeUpdateUserNameUsecase({
    Joi , 
    updateUserName
}) {
    return async function updateUserNameUsecase({id,name})
    {
        try {
            inputValid({name , id}) ; 
            await updateUserName({id,name}) ; 
        }
        catch (error)
        {
            throw error
        }
    }
    function inputValid(input) {
        const schema = Joi.object().keys({
            id : Joi.string().required() , 
            name : Joi.string().required()
        })
        const {error} = schema.validate(input) ; 
        if(error) { throw error}
    }
}