const Joi = require("joi");
const {showUsersUsecase , creatUserUsecase , deleteUserUsecase  , findUserByEmailUsecase , updateUserNameUsecase , creatFolderUsecase} = require("../../use-case");

const makeShowUsersController = require("./show-users.controller");
const showUsersController = makeShowUsersController({
  Joi,
  showUsersUsecase,
});

const makeCreatUserController = require('./creat-user.controller') ; 
const creatUserController = makeCreatUserController({
  Joi , 
  creatUserUsecase , 
})


const makeDeleteUserController = require('./delete-user.controller') ; 
const deleteUserController = makeDeleteUserController({
  Joi , 
  deleteUserUsecase
})

const  makeGetUserByEmail = require('./get-user-by-email.controller') ; 
const getUserByEmailController = makeGetUserByEmail({
  Joi , 
  findUserByEmailUsecase
})

const makeUpdateUserNameController = require('./update-user-name.controller') ; 
const updateUserNameController = makeUpdateUserNameController({
  Joi , 
  updateUserNameUsecase
})

const makeUpdateFolderNameController = require('./update-folder-name.controller') ; 
const updateFolderNameController = makeUpdateFolderNameController({
  Joi , 
 //
})

module.exports = { showUsersController, creatUserController , deleteUserController , getUserByEmailController , updateUserNameController  , updateFolderNameController};
