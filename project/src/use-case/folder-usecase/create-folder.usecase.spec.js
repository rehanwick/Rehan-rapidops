const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeCreatFolderUsecase = require("./create-folder.usecase");

const sandbox = sinon.createSandbox();

const mackFunction = {
    creatFolder : () => {
    }
}

const creatFolderStub = sandbox.stub(mackFunction,'creatFolder') ; 
creatFolderStub.callsFake((args) => {
    expect(args).deep.equal({
        id : this.id , 
        name : this.name 
    })
    return ; 
})

Given('user details name: {string} , email: {string} , to create a new folder', (name , id) => {
    (this.name = name || undefined) , 
    (this.id = id || undefined)
});


When('try to create a new folder', async () =>{
    const creatFolderUsecase = makeCreatFolderUsecase({
        Joi,
        creatFolder : mackFunction.creatFolder
     }) ; 
     try {
         await creatFolderUsecase({id : this.id , name :this.name }) ; 
     } catch (error) {
        this.error = {
            name : error.name , 
            message : error.message
        }
     }
});

Then('it will throw an error: {string} with message: {string} while creating a new folder',  (error, message) => {
    expect(this.error).deep.equal({
        name : error , 
        message : message , 
    })
});

Then('sucessfully created', () => {

});