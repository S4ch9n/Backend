const { BAD_REQUEST, CREATED, SUCCESS, NOT_FOUND } = require("../utils/constants");

let userDB = [];

exports.getAllusers = (req, res) => {
  res.status(200).json({
    status: "success",
    count : userDB.length,
    data: userDB,
  });
};
exports.getUserById = (req, res) => {
  const id = req.params.id;
  for(let i = 0 ; i  < userDB.length ; i++){
    if(userDB[i].username == id){
      res.status(SUCCESS).json({
        status : "success",
        data : userDB[i]
      })
      return;
    }
  }
  res.status(NOT_FOUND).json({
    status : "failure",
    messsage : `user with id ${id} not found`
  })
};

exports.createUser = (req, res) => {
  const { email, username, phone, password } = req.body;
  if (
    email == undefined ||
    password == undefined ||
    phone == undefined ||
    username == undefined
  ){
    res.status(BAD_REQUEST).json({
        status: "failure",
        message: "Please provide correct information",
      });
      return;
  }
  let user = {
    email, 
    username, 
    phone, 
    password
  };
  userDB.push(user)
  res.status(CREATED).json({
    status : "Success",
    data : user
  })
};
exports.updateUser = (req, res) => {};

exports.deleteAlllUser = (req, res) => {};

exports.deleteUserById = (req, res) => {};
