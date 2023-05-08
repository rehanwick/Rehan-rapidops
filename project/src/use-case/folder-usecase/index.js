const Joi = require('joi') ; 
const {creatFolder , getFolderById , deleteFolderById , getFolderByUserId } = require('../../data-access/sql')

const makeCreatFolderUsecase = require('./create-folder.usecase') ; 
const creatFolderUsecase = makeCreatFolderUsecase({
    Joi ,
    creatFolder 
}) ; 

const makeGetFolderByIdUsecase = require('./get-folder-by-id.usecase') ; 
const getFolderByIdUsecase = makeGetFolderByIdUsecase({
    Joi , 
    getFolderById
})


const makeDeleteFolderByIdUsecase = require('./delete-folder.usecase') ; 
const deleteFolderByIdUsecase = makeDeleteFolderByIdUsecase({
    Joi , 
    deleteFolderById
})

const makeGetFoldersByUserIdUsecase = require('./get-folders-by-useid.usecase')
const getFoldersByUserIdUsecase = makeGetFoldersByUserIdUsecase({
    Joi , 
    getFolderByUserId
})

module.exports = {creatFolderUsecase , getFolderByIdUsecase , deleteFolderByIdUsecase , getFoldersByUserIdUsecase} ; 