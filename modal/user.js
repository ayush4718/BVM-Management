const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    department: {
        type: String
    },
    branch: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    experience: {
        type: String
    },
    joining_date: {
        type: Date
    },
    personal_mail: {
        type: String,
        unique: true
    },
    dob: {
        type: Date
    },
    company_mail: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    emergency_no: {
        type: Number
    },
    bank_name: {
        type: String
    },
    ac_holder_name: {
        type: String
    },
    account_no: {
        type: Number,
        unique: true
    },
    ifsc_code: {
        type: String,
        unique: true
    },
    gpay: {
        type: String,
        unique: true
    },
    address: {
        type: String,
    },
    reference: {
        type: String,
    },
    stiphend_start_date: {
        type: Date,
    },
    salary_start_date: {
        type: Date,
    },
    resign_date: {
        type: Date,
    },
    aadhar_no: {
        type: Number,
        unique: true
    },
    pan_no: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;