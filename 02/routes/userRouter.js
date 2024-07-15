const express = require("express");
const {
    getUserById ,
    createUser, 
    updateUserById, 
    deleteUserById,
    } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/:id",getUserById) //get  user by id
userRouter.post("/",createUser) // create a new user
userRouter.patch("/:id",updateUserById) //update a user with a id
userRouter.delete("/:id",deleteUserById)  //delete user with id

module.exports = userRouter