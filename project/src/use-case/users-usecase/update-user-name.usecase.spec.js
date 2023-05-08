const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeUpdateUserNameUsecase = require("./update-user-name.usecase");

const sandbox = sinon.createSandbox();


const mackFunction = { 
    updateUserName : ()=>{
    }
} ; 

const updateUserNameStub = sandbox.stub(mackFunction , 'updateUserName')
updateUserNameStub.callsFake((args) => {
    expect(args).deep.equal({
        name : this.name , 
        email : this.email 
    })
    return ; 
})


Given('user details id: {string}  and name : {string} to update name', 
    (id,name) =>{
        this.id = id || undefined , 
        this.name = name || undefined 
});

When('try to update the name with invalid inputs', async  () => {
    const updateUserNameUsecase = makeUpdateUserNameUsecase({
        Joi , 
        updateUserName : mackFunction.updateUserName
    }) ; 
    try{
        await updateUserNameUsecase({ id : this.id , name : this.name}) ; 
    } catch(e)
    {
        this.error = {
            name : e.name , 
            message : e.message 
        }
    }
});

Then('it will throw an error: {string} with message: {string} while update user', 
async (error , message) => {
    expect(this.error).deep.equal({
        name : error , 
        message : message 
    }) ; 
} );



Given('user details id: {string} , name : {string} to update name', 
(id,name) =>{
    this.id = id || undefined , 
    this.name = name || undefined 
}
);


When('try to update the name', async () => {
    const updateUserNameUsecase = makeUpdateUserNameUsecase({
        Joi , 
        updateUserName : mackFunction.updateUserName
    }) ; 
    try{
        await updateUserNameUsecase({ id : this.id , name : this.name}) ; 
    } catch(e)
    {
        this.error = {
            name : e.name , 
            message : e.message 
        }
    }
});


Then('update the name' , () => {
    
});
