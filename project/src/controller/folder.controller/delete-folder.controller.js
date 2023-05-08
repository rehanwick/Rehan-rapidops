function makeDeleteFolderById({
    Joi , 
    deleteFolderByIdUsecase
}) { 
    return async function deleteFolderById(req,res) { 
        try { 
            validInput(req.params) ; 
            const  { id }  = req.params ;
            await deleteFolderByIdUsecase({id})
            res.status(200).json({
                status : 'success' , 
                msg : `folder with id ${id} is deleted`
            })
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({
                status : 'error' , 
                msg : error
            })
        }
    }
    function validInput(input)
    {
        const schema = Joi.object().keys({
            id : Joi.string().required() 
        })
        const {error} = schema.validate(input) ; 
        if(error) {throw err}
    }
}

module.exports = makeDeleteFolderById ; 