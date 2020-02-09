'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;


//Driver Model
let DriverSchema = new Schema({
    NUID: {
        type: String
    },
    userType: {
        type: String,
        default: 'Driver'
    },
    shiftTime: {
        type: String,
        default: '7PM - 6AM'
    },
    daysWorking: {
        type: Array,
        required: 'Please select a day for the shift'
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: ['inactive']
    }
});

module.exports = mongoose.model('Driver', DriverSchema, 'driver');
