var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    Ename:String,
    salary:Number
})

module.exports = mongoose.model("employees",employeeSchema)
