
const express = require('express');

const todo = require('../controllers/todo');
const router = express.Router();router
router.get("/",todo.homeController );
  
  router.get("/add-todo", todo.addTodoFormController);
  
  router.get("/update-todo", todo.updateTodoController);
  
  router.get("/delete-todo", todo.deleteTodoController);
  
  router.post('/add-todo',todo.addTodoController);

  module.exports = router;