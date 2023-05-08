const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeDeleteUserUsecase = require("./delete-user.usecase");

const sandbox = sinon.createSandbox();

const mackFunction = {
    deleteUser : () => {
    }
}

const deleteUserStub = sandbox.stub(mackFunction,'deleteUser') ; 
deleteUserStub.callsFake((args) => {
    expect(args).deep.equal({
        id : this.id
    })
    return ; 
})




Given('user details id: {string} to delete user with invalid id', (id) => {
    (this.id = id || undefined )
});

When('try to delete user', async () => {
    const deleteUserUsecase = makeDeleteUserUsecase({
        Joi , 
        deleteUser : mackFunction.deleteUser 
    }) ;
    try{ 
       await deleteUserUsecase({id : this.id})
    }
    catch (e) {
        console.log(e);
        this.error = { 
            name : e.name , 
            message : `${e.message}`  
        }; 
    }
});

Then('throw error : {string} and message : {string}', 
async ( error , message) =>  { 
    expect(this.error).deep.equal({
        name : error , 
        message : message,
    })
})