const express = require("express");
const { signupEmployee, loginEmployee } = require("../controller/companyController");

const route = express.Router();

route.post("/signup",signupEmployee)
route.post("/login",loginEmployee)


module.exports = route

