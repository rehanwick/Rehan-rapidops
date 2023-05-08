const Joi = require("joi");

//usecase 
const {creatFolderUsecase , getFolderByIdUsecase , deleteFolderByIdUsecase} = require('../../use-case') ; 

const makeCreatFolder = require('./creat-folder.controller') ; 
const creatFolderController = makeCreatFolder({
    Joi ,
    creatFolderUsecase
})

const makeGetFolderByIdController = require('./get-folder-by-id.controller') ; 
const getFolderByIdController = makeGetFolderByIdController({
    Joi , 
    getFolderByIdUsecase
})

const makeDeleteFolderById = require('./delete-folder.controller') ; 
const deleteFolderById = makeDeleteFolderById({
    Joi , 
    deleteFolderByIdUsecase
})

module.exports = {creatFolderController , getFolderByIdController , deleteFolderById} ; 