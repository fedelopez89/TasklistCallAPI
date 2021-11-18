const Joi = require('joi');
const TaskService = require('../services/task.service');

async function getTasks(req, res) {
  try {

    const numberTask = req.query.numberTask;

    const { error } = Joi.number().required().validate(numberTask);
    if (error) return res.status(400).send(`Bad request, ${error.message}`);

    const tasks = await TaskService.getTask(numberTask);

    return res.status(200).send(tasks);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error.message}`);
  }
}

async function putTask(req, res) {
  try {

    const {id} = req.params;
    console.log(id);
    
    return res.status(200).send(id);
    
  } catch (error) {    
    return res.status(500).send(`Error: ${error.message}`);
  }
}


module.exports = {
  getTasks,
  putTask
};