const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")


const app = express()
app.use(express.json())

app.use("/user",require("./routes/userRoutes"))
app.use("/resume",require("./routes/resumeRoutes"))
app.use("/company",require("./routes/companyRoutes"))
app.use("/intern",require("./routes/internshipRoutes"))
app.use("/application",require("./routes/applicationRoutes"))
app.use("/prefrence",require("./routes/prefrenceRoutes"))

connectDb()

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server is created");
})

