//***** Modules goes here *****//
const express = require('express');
//***** ///// *****//

//***** Express Router to export in module *****//
const app = express.Router();
//***** ///// *****//

const addData = require('../controllers/add/addData');
app.use('/data', addData);

module.exports = app;