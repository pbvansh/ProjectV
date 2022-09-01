const express = require("express")
const {createInternship, updateInternship, deleteInternship} = require("../controller/internController")

const route = express.Router()

route.post("/create",createInternship)
route.post("/update/:id",updateInternship)
route.post("/delete/:id",deleteInternship)

module.exports = route

