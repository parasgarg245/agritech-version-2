const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const CompanyUserSchema = new mongoose.Schema({
    username: String,
    Cid: Number,
    password: String

})

CompanyUserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('CompanyUser', CompanyUserSchema)