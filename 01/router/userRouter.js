const express = require("express");
const {
  createUser,
  getAllusers,
  getUserById,
  updateUser,
  deleteAlllUser,
  deleteUserById,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", getAllusers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/", deleteAlllUser);
userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;
