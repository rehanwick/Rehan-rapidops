const { Given, When, Then, After } = require("@cucumber/cucumber");
const { expect } = require("chai");
const sinon = require("sinon");
// const { valid } = require("joi");
const Joi = require("joi");
const makeCreatUserUsecase = require("./creat-user.usecase");

const sandbox = sinon.createSandbox();

const mackFunction = {
  creatUser: () => {},
  findUserByEmailUsecase: () => {},
  creatFolderUsecase: () => {},
};

const findUserByEmailUsecaseStub = sandbox.stub(
  mackFunction,
  "findUserByEmailUsecase"
);
findUserByEmailUsecaseStub.callsFake((args) => {
  expect(args).deep.equal({
    attributes: ["id"],
    email: this.email,
  });
  return this.findUserByEmailUsecase;
});

const createUserStub = sandbox.stub(mackFunction, "creatUser");
createUserStub.callsFake((args) => {
  expect(args).deep.equal({
    name: this.name,
    email: this.email,
    mobile: this.mobile,
    password: this.password,
  });

  return { id: 1 };
});

const createFolderStub = sandbox.stub(mackFunction, "creatFolderUsecase");
createFolderStub.callsFake((args) => {
  expect(args).deep.equal({
    id: 1,
    name: "rehan",
  });
});

After(() => {
  (this.name = undefined),
    (this.email = undefined),
    (this.password = undefined),
    (this.findUserByEmailUsecase = undefined),
    (this.creatFolderUsecase = undefined),
    (this.creatUser = undefined);
});


Given(
  "user details name: {string} , email: {string} , password:{string} to create a new user",
  (name, email, password) => {
    (this.name = name || undefined),
      (this.email = email || undefined),
      (this.password = password || undefined);
  }
);

When(`try to create a new user`, async () => {
  const creatUserUsecase = makeCreatUserUsecase({
    Joi,
    creatUser : mackFunction.creatUser , 
    creatFolderUsecase : mackFunction.creatFolderUsecase , 
    findUserByEmailUsecase : mackFunction.findUserByEmailUsecase 
  });
  try {
    this.result = await creatUserUsecase({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  } catch (e) {
    // console.log(`mess: ${e.message}`);
    this.error = {
      name: e.name,
      message: e.message,
    };
  }
});

Then(
  `it will throw an error: {string} with message: {string} while creating a user`,
  async (error, message) => {
    expect(this.error).deep.equal({
      name: error,
      message : message ,
    });
  }
);


