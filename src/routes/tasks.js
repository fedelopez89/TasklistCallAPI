const express = require('express');
const TaskController = require('../controllers/task.controller');

const api = express.Router();

api.get('/', TaskController.getTasks);

api.put('/:id', TaskController.putTask);

module.exports = api;