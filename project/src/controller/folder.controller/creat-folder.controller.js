function makeCreatFolder({
    Joi , 
    creatFolderUsecase
    
}) {
    return async function creatFolder(req,res) {
        try{
            validInput(req.body) ; 
            await creatFolderUsecase(req.body) ; 
            res.status(201).json({
                status : 'success' , 
                msg : 'Folder have been created'
            })
        }
        catch(err)
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
            name : Joi.string().required() , 
            id : Joi.required() 
        })
        const {error} = schema.validate(body) ; 
        if(error) {throw error}
    }
}

module.exports = makeCreatFolder ; 