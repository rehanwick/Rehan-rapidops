module.exports = function makeDeleteUserController({
    Joi , 
    deleteUserUsecase
}){
    return async function deleteUserController(req,res){
        const {id} = req.params ; 
        try {
          await deleteUserUsecase({id}) ; 
        }
        catch (err)
        {
            console.log(err);
            res.status(400).json({
                status : 'error' , 
                msg : err 
            })
        }
    }
}