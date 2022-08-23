const express = require('express');
const routes = require('../routes/studentRouter');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;