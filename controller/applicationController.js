const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")

const Application = require("../model/applicationModel")

const createApplication = asyncHandler(async(req,res)=>{
      const capp = await Application.create(req.body)
      res.status(200).json(capp)
})

const updateApplication = asyncHandler(async(req,res)=>{
    const uapp = await Application.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(uapp)
})


module.exports = {
    createApplication,
    updateApplication
}