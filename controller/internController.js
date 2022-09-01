const mongoose = require("mongoose")
const asynHandler = require("express-async-handler")
const Internship = require("../model/internshipModel")

const createInternship = asynHandler(async(req,res)=>{
     const si = await Internship.create(req.body)
     res.status(200).json(si)
})

const updateInternship = asynHandler(async(req,res)=>{
     const updatei = await Internship.findByIdAndUpdate(req.params.id,req.body,{new : true})
     res.status(200).json(updatei)
     // console.log("Internship is updated")
})

const deleteInternship = asynHandler(async(req,res)=>{
     const deletei = await Internship.findByIdAndDelete(req.params.id)
     res.status(200).json(deletei)
     // console.log("internship is deleted")
})

module.exports = {
   createInternship,
   updateInternship,
   deleteInternship
}