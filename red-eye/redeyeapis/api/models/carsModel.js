'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Car Model
let CarSchema = new Schema({
    carNumber: {
        type: String,
        required: true
    },
    yearOfManufacture: {
        type: Number
    },
    noOfSeats: {
        type: Number,
        required: 'Please enter the number of seats'
    }
});

module.exports = mongoose.model('Car', CarSchema, 'cars');