const Joi = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.schema


const userSchema = ({
    name:{
      type : String,
      required : true,
      min : 3,
      max : 10
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    qualification : {
      type : String,
      required : true,
    
    },
    address :{
        type : String,
        required : true,
        
    }
})


const schema = Joi.object({
    userName : Joi.string().required().min(3).max(10),
    email : Joi.string().required().unique,
    password : Joi.string().min(4).max(10),
    address : Joi.string().required()
});

const User = new mongoose.model('User', Schema)

module.exports = User
