const e = require("express")

function makeUpdateFolderNameController({
    Joi , 
    //userCase
}) {
    return async function updateFolderNameController(req,res){
        try{
            const {id} = req.params ; 
            const {name} = req.body ; 
            validInput({name , id}) ; 
            // await usecase
            res.status(201).json({
                status : 'success' , 
                msg : `Folder name of id ${id} is changed to ${name}`
            })
        }
        catch(err)
        {
            res.status(500).json({
                status : 'error' , 
                msg : err.message
            })
        }
    }
    function validInput(input)
    {
        const schema = Joi.object().keys({
            id : Joi.string().require() , 
            name : Joi.string().require() 
        })
        const {error} = schema.validate(input) ; 
        if(error) {throw error}
    }
}

module.exports = makeUpdateFolderNameController ; 