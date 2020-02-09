'use strict';

let mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Emergency Model
let EmergencySchema = new Schema({
    departmentName: {
        type: [{
            type: String,
            enum: ['NUPD', 'NUPD Non-Emergency', 'Administrative Office', 'Domestic Emergency', 'Emergency Abroad']
        }],
        default: ['NUPD']
    },
    contactNumber: {
        type: String,
        required: 'Please enter contact number',
    },
    emailId: {
        type: String,
        required: 'Please enter the email ID',
    },
    logo:{
        type: String
    }

});

module.exports = mongoose.model('Emergency', EmergencySchema , 'emergency')