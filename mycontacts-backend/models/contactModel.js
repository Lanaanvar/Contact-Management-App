const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true, "Please add contact name"]
    },
    email: {
        type : String,
        required : [true, "Please add email id"]
    },
    number: {
        type : String,
        required : [true, "Please add number"]
    }
},
    {
        timestamps : true
    })

module.exports = mongoose.model("Contact", contactSchema)