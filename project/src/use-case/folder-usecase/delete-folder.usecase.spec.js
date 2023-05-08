const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeDeleteFolderByIdUsecase = require("./delete-folder.usecase");

const sandbox = sinon.createSandbox();

const mackFunction = {
    deleteFolder : () => {
    }
}

const deleteFolderByIdStub = sandbox.stub(mackFunction,'deleteFolder') ; 
deleteFolderByIdStub.callsFake((args) => {
    expect(args).deep.equal({
        id : this.id , 
    })
    return ; 
})


Given('details id : {string} , of a folder', (id) => {
    this.id = id || undefined
});


When('try to delete a folder' , async () => {
    const deleteFolderByIdUsecase = makeDeleteFolderByIdUsecase({
        Joi , 
        deleteFolderById : mackFunction.deleteFolder
    });

    try {
        await deleteFolderByIdUsecase({id : this.id})
    }
    catch (e) {
        this.error = {
            name : e.name , 
            message : e.message , 
        }
    }
});

Then('it will throw an error: {string} with message: {string} while Deleteing a folder', (error , message) => {
   
    expect(this.error).deep.equal({
        name : error , 
        message : message , 
    })
});
