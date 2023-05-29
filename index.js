const express = require("express");
const app = express();
 

//lod config

require("dotenv").config;
const PORT = process.env.PORT || 4000;

//middleware

app.use(express.json());


//import  routes for TODO API

const todoRoutes = require("./routes/todos");

//mount the todo adpi 

app.use("/api/v1", todoRoutes);

//start server

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
})

//connection of DB
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page</h1>`);
})