'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;


//Reservation Details Model
let ReservationModel = new Schema({
    bookingId:{
        type: String
    },
    scheduleId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'RiderWeeklySchedule'
    },
    source:{
        type:String,
        //enum : ['Snell Library', '1110 Comm. Ave' ],
        //default : ['Snell Library']
    },
    destination:{
        type:String,
        //required: 'Please enter a destination'
    },
    pickUpTime:{
        type:String,
        //required: 'Please enter the time for pickup'

    },
    dropOffTime: {
        type:String,
        //required: 'Please enter the time for drop'
    },
    rideStatus: {
        type: String,
        enum: ['Booked', 'Cancelled', 'NoShow', 'Completed', 'OnGoing'],
        default: ['Booked']
    },
    numberOfPerson: {
        type: String,
        //enum: ['1','2', '3', '4', '5'],
        default: ['1']
    },
    slot:{
        type:String
    },
    NUID: {
        type:String
    },
    date: {
        type: String
    },
    nuobj: {
        type: mongoose.Schema.Types.ObjectId, ref: 'NortheasternUniversityAD'
    },
    carId: {
        type:String
    },
    driverID: {
        type:String
    },
    zone: {
        type:String
    }

});

module.exports = mongoose.model('Reservation', ReservationModel,'reservations');
