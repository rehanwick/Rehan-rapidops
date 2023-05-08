function makeGetFolderByIdController({
    Joi , 
    getFolderByIdUsecase  
}) { 
    return async function getFolderByIdController(req,res) { 
        try{
            validInput(req.params) ; 
            const {id} = req.params ; 
            const folder = await getFolderByIdUsecase({id}) ; 
            res.status(200).json({
                status : 'success' , 
                msg : folder 
            })
        } catch(err)
        {
            res.status(500).json({
                status : 'error' , 
                msg : err
            })
        }
    }
    function validInput(body)
    {
        const schema = Joi.object().keys({
            id : Joi.required()
        })
        const {error} = schema.validate(body) ; 
        if(error) {throw error}
    }
}

module.exports = makeGetFolderByIdController ; 