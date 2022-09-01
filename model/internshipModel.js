const mongoose = require("mongoose")

const internSchema = mongoose.Schema({

    company_id :{
         type : mongoose.Schema.Types.ObjectId,
         ref : "Company" 
    },

    Internship_Name: {
        type: String,
        required: [true, "Please enter this filed"],
    },
    Location: {
        type: String,
        required: [true, "Please enter location"]
    },
    Duration: {
        type : String,
        required : [true,"Please enter duration"]
    },
    start_date : {
        type : Date,
        required:[true,"Enter the starting date"]
    },
    Stipend : {
        type: Number,
    },
    ApplyBy :{
        type:Date,
        required : [true,"Enter the last date"],
    },
    RequiredSkills:{
        type : [String],
        required:[true,"Enter the required Skills"]
    },
    LearningSkillsByInternshala :{
        type : [String],

    },
    whocanapply:{
        type :[String]
    },
    perks:{
        type : [String]
    },
    Additional_information :{
        type : [String]
    },
    TotalNoOfApplicants :{
        type :Number,
        required : [true,"Please enter total No. of applicants"]
    },
    NoOfOpening :{
        type : Number,
        required : [true,"Enter total No. of openings"]
    },
    islive:{
        type: Boolean,
        required:[true,"Enter status of internship"]
        
    }



}, { timestamp: true })

module.exports = mongoose.model("Internship", internSchema)