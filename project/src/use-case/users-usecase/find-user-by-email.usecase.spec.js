const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeFindUseByEmailUsecase = require("./find-user-by-email.usecase");

const sandbox = sinon.createSandbox();

const mackFunction = {
    getUserByEmail : ()=> {
    }
};



const getUserByEmailStub = sandbox.stub(mackFunction, "getUserByEmail");
getUserByEmailStub.callsFake((args) => {
  expect(args).to.deep.equal({
    email: this.email
  });
  return {id : 12 , name : 'Rehan Shaikh' , email : 'rs0327884@gmail.com' , password : '12345678'};
});



After(() => {
    (this.email = undefined)
});


Given(
  "user details gmail: {string} to find user",
  ( email) => {
      (this.email = email || undefined)
  }
);

When(`try to find a new user`, async () => {
  const findUserByEmailUsecase = makeFindUseByEmailUsecase({
    Joi,
    getUserByEmail : mackFunction.getUserByEmail 
  });
  try {
      this.user = await findUserByEmailUsecase({
      email: this.email,
    });
    return this.user ; 
  } catch (e) {
    console.log(e);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then(
  `it will return {string}`,
  async (user) => {
    user = JSON.parse(user)
    expect(this.user).to.be.deep.equal(user);
  }
);




Given('invalid user email : {string}' , (email) => {
   this.email = email || undefined 
})

When(`try to find new user by invalid email` , async () => {
const findUserByEmailUsecase = makeFindUseByEmailUsecase({
  Joi,
  getUserByEmail : mackFunction.getUserByEmail 
});
try {
    this.user = await findUserByEmailUsecase({
    email: this.email,
  });
  return this.user ; 
} catch (e) {
  // console.log(e);
  this.error = {
    name: e.name,
    message: e.message,
  };
}
});

Then(`it will throw an error: {string} with message: {string} while finding user` ,
async (error , message ) => {
  expect(this.error).deep.equal({
    name : error , 
    message : message , 
  });
});