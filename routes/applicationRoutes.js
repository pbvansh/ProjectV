const express = require("express");
const {createApplication, updateApplication} = require("../controller/applicationController")
const route = express.Router();

route.post("/createapp",createApplication)
route.post("/updateapp/:id",updateApplication)



module.exports = route
