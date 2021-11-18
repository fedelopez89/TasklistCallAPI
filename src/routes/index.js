const express = require('express');

const app = express();

app.use('/tasks', require('./tasks.js'));

module.exports = app;