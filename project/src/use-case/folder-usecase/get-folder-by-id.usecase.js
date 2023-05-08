module.exports = function makeGetFolderByIdUsecase({
    Joi , 
    getFolderById
}) { 
    return async function getFolderByIdUsecase({id})
    {
        validInput({id}) ; 
        let folder; 
        try { 
            folder = await getFolderById({id}) 
            return folder ; 
        }
        catch (err)
        {
            throw err
        }
    }
    function validInput(input) {
        const schema = Joi.object().keys({
            id : Joi.string().required()
        })

        const {error} = schema.validate(input) ; 
        if(error) { throw error} 
    }
}