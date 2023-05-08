const Joi = require("joi");

const kafkaCreatFolder = require('../../handlers/default-folder-kafka.heandler') ; 

const {showUsers , creatUser   , deleteUser , updateUserName , getUserByEmail } = require("../../data-access/sql");
const  { creatFolderUsecase } = require('../folder-usecase'); 

const makeShowUsersUsecase = require("./show-users.usecase");
const showUsersUsecase = makeShowUsersUsecase({
  Joi,
  showUsers,
});



const makeDeleteUserUsecase = require('./delete-user.usecase') ; 
const deleteUserUsecase = makeDeleteUserUsecase({
  Joi , 
  deleteUser
})

const makeFindUseByEmailUsecase = require('./find-user-by-email.usecase') ; 
const findUserByEmailUsecase = makeFindUseByEmailUsecase({
  Joi , 
  getUserByEmail
})


const makeCreatUserUsecase = require('./creat-user.usecase') ; 
const creatUserUsecase = makeCreatUserUsecase({
  Joi , 
  creatUser , 
  creatFolderUsecase , 
  findUserByEmailUsecase , 
  kafkaCreatFolder
})


const  makeUpdateUserNameUsecase = require('./update-user-name.usecase') ; 
const updateUserNameUsecase = makeUpdateUserNameUsecase({
  Joi , 
  updateUserName
})

module.exports = {showUsersUsecase , creatUserUsecase , deleteUserUsecase , findUserByEmailUsecase , updateUserNameUsecase};
