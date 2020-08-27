const express = require("express");
const Joi = require("joi");
const { visualizeData } = require("../../Models/data.model");
//***** ///// *****//

//***** Express Router to export in module *****//
const app = express();
//***** ///// *****//

app.post("/", async (req, res) => {
  const { error } = validateData(req.body);

  if (error) {
    var errors = {
      success: false,
      msg: error.details[0].message,
      data: error.name,
    };
    res.send(errors);
    return;
  }

  addData(req, res);
});

async function addData(req, res) {
  let data = new visualizeData(req.body);
  try {
    const result = await data.save();
    res.send({ success: true, msg: "created", data: result });
  } catch (err) {
    console.log(err);
    res.send({ success: false, error: err });
  }
}

//***** ///// *****//
function validateData(visualizeData) {
  const schema = Joi.object().keys({
    Date: Joi.date().required(),
    Open: Joi.number().required(),
    High: Joi.number().required(),
    Low: Joi.number().required(),
    Close: Joi.number().required(),
    Volume: Joi.number().required(),
  });
  return Joi.validate(visualizeData, schema);
}

module.exports = app;
