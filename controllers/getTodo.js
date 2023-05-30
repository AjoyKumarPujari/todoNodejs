//import the model

const Todo = require("../models/Todo");

//route handler

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from db
        const todos = await Todo.find({});

        //return response
        res.status(200)
        .json({
            success:true,
            data:todos,
            Message: "Entire todo Data is fetched",
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes: false,
            message:"Server Eroor",
            error:err.message,
        })
        
    }
} 



exports.getTodoById = async (req, res) => {
    try {

        //extract todo data by ID
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        //data for given id not found
        if(!todo){
            return res.status(404).json({
                succes:false,
                message:"Data not found"
            })
        }
        //return response
        res.status(200)
        .json({
            success:true,
            data:todo,
            Message: `Todo ${id} data successfully fetched`,
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes: false,
            message:"Server Eroor",
            error:err.message,
        })
        
    }
} 