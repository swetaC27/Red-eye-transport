'use strict';
var mongoose = require('mongoose'),
bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


//Northeastern University Active Directory
let NortheasternUniversityADSchema = new Schema ({
    NUID: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateofBirth: {
        type: Date
    },
    emailID: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    dateOfJoining: {
        type: Date
    },
    password:{
        type: String
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: String
        }
    },
    userType: {
        type: String,
        enum: ['Student', 'Alumni', 'Driver', 'Admin']
    }
});

NortheasternUniversityADSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

NortheasternUniversityADSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('NortheasternUniversityAD', NortheasternUniversityADSchema, 'nuActiveDirectory');
