const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: "./.env"});

const userRouter = require('./routes/userRouter')
const app = express()

app.use(express.json())

const port = 8080

app.use("/user", userRouter)

const sever = app.listen(port ,()=>{
    console.log(`Server is ruuning at port ${port}`)
})

const DB_URL = process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD);

//connected to mongoose
const DB = mongoose.connect(DB_URL).then(()=>{
    console.log("Connected to MongoDB")
})