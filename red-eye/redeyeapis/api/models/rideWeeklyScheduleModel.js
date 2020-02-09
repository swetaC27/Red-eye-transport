'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let Car = require('./carsModel');


//Ride Weekly Schedule Model
let RideWeeklyScheduleSchema = new Schema({
    scheduleId: {
        type: String
    },
    rideDate: {
        type: Date
    },
    dayOfTheWeek: {
        type: String
    },
    carId: {
        // type: mongoose.Schema.Types.ObjectId, ref: 'Car'
        type: String
    },
    NUID: {
        //type: mongoose.Schema.Types.ObjectId, ref: 'Driver'
        type: String
    },
    slotTime: {
        type: String,
        enum: ['7:00 PM - 7:30 PM',
            '7:30 PM - 8:00PM',
            '8:00PM - 8:30PM',
            '8:30PM -  9:00PM',
            '9:00PM - 9:30PM',
            '9:30PM - 10:00PM',
            '10:00PM - 10:30PM',
            '10:30PM - 11:00PM',
            '11:00PM - 11:30PM',
            '11:30PM - 12:00AM',
            '12:00AM - 12:30AM',
            '12:30AM - 1:00AM',
            '1:00AM - 1:30AM',
            '1:30AM - 2:00AM',
            '2:00AM - 2:30AM',
            '2:30AM - 3:00AM',
            '3:00AM - 3:30AM',
            '3:30AM - 4:00AM',
            '4:00AM - 4:30AM',
            '4:30AM - 5:00AM',
            '5:00AM - 5:30AM',
            '5:30AM - 6:00AM']
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

module.exports = mongoose.model('RiderWeeklySchedule', RideWeeklyScheduleSchema, 'rideWeekly');
