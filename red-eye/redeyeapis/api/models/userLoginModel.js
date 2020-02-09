'use strict';
var mongoose = require('mongoose'),
bcrypt = require('bcrypt');

const Schema = mongoose.Schema;


//User Login Model
let UserLoginSchema = new Schema({
    userName: {
        type: String,
        required: 'Username is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    userType: {
        type: String,
        enum: ['Student', 'Alumni', 'Driver', 'Admin'],
        //required: 'User Type is required'
    }
});

UserLoginSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

UserLoginSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('UserLogin', UserLoginSchema,'user');