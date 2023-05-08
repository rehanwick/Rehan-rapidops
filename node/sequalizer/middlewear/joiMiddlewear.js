const Joi = require("joi");

const validationIdName = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    id: Joi.string().required(),
  });
  const { error } = await schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (error) {
    res.status(400).json({
      status: "error",
      message: "id and name is require",
    });
  } else {
    next();
  }
};

const validationId = async (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
  });
  const { error } = await schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });
  if (error) {
    res.status(400).json({
      status: "error",
      msg: "ID is require",
    });
  } else {
    next();
  }
};

const validationName = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });
  const { error } = await schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
  });
  if (error) {
    res.status(400).json({
      status: "error",
      msg: "name is require",
    });
  } else {
    next();
  }
};

module.exports = {
  validationIdName,
  validationId,
  validationName,
};
