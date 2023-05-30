//import the model

const Todo = require("../models/Todo");

//handler function
exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200)
        .json({
            success:true,
            Message: `Todo deleted successfully`,
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