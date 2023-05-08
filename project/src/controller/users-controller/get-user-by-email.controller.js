module.exports = function makeGetUserByEmail({
    Joi , 
    findUserByEmailUsecase
}) {
    return async function getUserByEmail(req,res){
        const {email} = req.params ; 
        let user ; 
        try {
         user =    await findUserByEmailUsecase({email}) ; 
        }
        catch (err)
        {
            throw err ; 
        }
        return user ; 
    }
}