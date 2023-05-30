const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodoById} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//api route define
//post todo route
router.post("/createTodo", createTodo);
//get all todos route
router.get("/getTodos", getTodo);
//get todo data by ID 
router.get("/getTodos/:id", getTodoById);
//Update todo data by ID 
router.post("/updateTodo/:id", updateTodoById);
//Delete todo data by ID 
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;