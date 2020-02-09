/*Reservation table will be used and the model will be used 
for single linkage and this will allow us to populate details 
for passengers confirmed booking*/

'use strict';
const createError = require('http-errors');

var mongoose = require('mongoose'),
  passengerBooking = mongoose.model('Reservation');


  /*
Confirmed ride method will allow us to get the data 
and help us to view the passenger confirmed booking

readConfirmedRide : Reservation details will be viewed.
  */


  exports.readConfirmedRide = function(req, res) {
    console.log("hello");
    passengerBooking.findById(req.params.id, function(err, booking) {
      if (err)
        res.send(err);
      res.json(booking);
    });
  };