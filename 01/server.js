const express = require("express")
const userRouter = require("./router/userRouter")
const app = express()

app.use(express.json())  //to access body in request
const port = 8080;


app.use('/user' , userRouter)
const server = app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})