
const Todo = require('../models/todo');
const moment = require('moment');
const homeController = async(req, res, next) => {
    try {
      const todos = await Todo.find({}).sort({createdAt:-1});
      res.locals.moment = moment;
      res.render("index", { title: "List todo" ,todos});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const addTodoFormController = (req, res, next) => {
    try {
      res.render("newTodo", { title: "New todo" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const updateTodoController = (req, res, next) => {
    try {
      res.render("updateTodo", { title: "Update todo" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteTodoController = (req, res, next) => {
    try {
      res.render("deleteTodo", { title: "Delete todo" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const addTodoController = async(req,res,next)=>{
    try {
     const {title,desc}  = req.body;
     console.log(title,desc);
     const newTodo =  new Todo({title,desc});
     await newTodo.save();
     res.redirect('/');
    } catch (error) {
     res.status(500).json({message:error.message});
    }
   };
  module.exports = {
    homeController,
    addTodoFormController,
    updateTodoController,
    deleteTodoController,
    addTodoController,
  }