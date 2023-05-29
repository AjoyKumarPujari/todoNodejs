//import the model

const Todo = require("../models/Todo");

//route handler

exports.createTodo = async (req, res) => {
    try {
        //extract title and description from response body
        const {title, description} = req.body;
        //create a new object and insert in db
        const response = await Todo.create({title,description});
        //response send
        res.status(200).json(
            {
                succes: true,
                data: response,
                message: "Entry Created Successfully"
            }
        );
    } catch (error) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes: false,
            data:"Internal Server Error",
            message:err.message,
        })
        
    }
} 

