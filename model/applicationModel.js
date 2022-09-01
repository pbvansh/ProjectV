const mongoose = require("mongoose")


const applicationSchema = mongoose.Schema({
     company_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Company"
     },
     Internship_date :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Internship"
     },
     user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
     },
     application_status:{
        type : String,
        required : [true]
     },
     applied_date:{
        type : Date,
        required : true
     }

},{timestamps:true}) 

module.exports = mongoose.model("Application",applicationSchema)
