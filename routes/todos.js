const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//api route define
router.post("/createTodo", createTodo);

module.exports = router;