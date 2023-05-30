//import the model

const Todo = require("../models/Todo");

//route handler

exports.updateTodoById = async (req, res) => {
    try {
         //extract todo data by ID
         const id = req.params.id;
         const {title, description } = req.body;
        //fetch all todo items from db
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt:Date.now()},
        );

        //return response
        res.status(200)
        .json({
            success:true,
            data:todo,
            Message: "Updated Successfully",
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes: false,
            message:"Server Error",
            error:err.message,
        })
    }
}