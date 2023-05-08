const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeGetFolderByIdUsecase = require("./get-folder-by-id.usecase");
const e = require("express");

const sandbox = sinon.createSandbox();

const mackFunction = {
    getFolderById : () => {
    }
}

const getFolderStub = sandbox.stub(mackFunction,'getFolderById') ; 
getFolderStub.callsFake((args) => {
    expect(args).deep.equal({
        id : this.id , 
        name : this.name 
    })
    return ; 
})


Given('details id : {string} , of a folder to get folder', 
    (id) => {
        this.id = id || undefined 
    }
);


When('try to get a folder', async () => {
    const getFolderByIdUsecase =  makeGetFolderByIdUsecase({
        Joi , 
        getFolderById : mackFunction.getFolderById
    }) ; 
    try {
        await getFolderByIdUsecase({id : this.id}); 
    } catch (error) {
        this.error = {
            name : error.name , 
            message : error.message
        }
    }
} );

Then('it will throw an error: {string} with message: {string} while geting a folder', (error , message) => {
    expect(this.error).deep.equal({
        name : error , 
        message : message
    })
});