
const express = require('express');

const todo = require('../controllers/todo');
const router = express.Router();router
router.get("/",todo.homeController );
  
  router.get("/add-todo", todo.addTodoFormController);
  
  router.get("/update-todo", todo.updateTodoController);
  
  router.get("/delete-todo", todo.deleteTodoController);
  
  router.post('/add-todo',todo.addTodoController);
  router.post('/update-todo/:id',todo.updateTodo);
  router.get('/confirm-delete',todo.deleteTodo);
  module.exports = router;