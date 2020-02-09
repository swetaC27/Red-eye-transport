/*Require allows for the association
one time binding and hence mongoDB association 
for Northeastern Universiy Active Directory and then the 
link to the reservation table.
*/
'use strict';
const createError = require('http-errors');

var mongoose = require('mongoose'),
  passenger = mongoose.model('NortheasternUniversityAD'),
  passengerBooking = mongoose.model('Reservation');

var userObj = {
    
}

  exports.read_userlist = function(req, res) {
    passenger.findById(req.params.id, function(err, user) {
      if (err)
        res.send(err);
        else {
            console.log(user.NUID);
            userObj.NUID = user.NUID;
            userObj.firstName = user.firstName;
            userObj.lastName = user.lastName;
            userObj.emailID = user.emailID;
            // passengerBooking.findOne({NUID: user.NUID}, function(err, data) {
            //     userObj.passengerBooking = data;
            //    // console.log(data);
            //     res.json(userObj);
            // });
            passengerBooking.findOne({NUID: user.NUID}).sort({_id:-1}).limit(1).exec(function(err, data) {
                userObj.passengerBooking = data;
               // console.log(data);
                res.json(userObj);
            });
        }
     
    });
  };
  
  /* Save FormData - User to MongoDB
  save method : Post Data to mongoDB so that the new data gets into 
  database and hence booking details,all attributes are saved.
  If error detected 500 then printing the message
  */
  exports.save = (req, res) => {    
      console.log('--------------body---',req.body)
      let user = new passengerBooking(req.body);
      user.save()
      .then(data => {
          res.send(data);
      }).catch(err => {
          res.status(500).send({
              message: err.message
          });
      });    
  };


 /*
Updation of the details the status for cancellation
Booked status gets updated to cancelled and hence 
accounts for the post method and mongoDB updation.
Error code : 400 --> Updation failed and 200 success code 
will be leading to cancellation of the ride.
*/
  exports.updateBookingDetails = function(req, res) {
    
    passengerBooking.findById(req.params.id, (err, ride) => {
      ride.rideStatus = "Cancelled";
      //res.send(ride);

    ride.save()
      .then(ride => {
        res.json('Update done');
    })
    .catch(err => {
        //res.send(err);
        res.status(400).send('Update failed');
    })
  
});
      

    }


    /*Ride History details will be requiring get method for directly get
    the ride history and this will allow for getting all the historical
    data. Historical data and the future bookings will be getting listed.
    Filtered applied on HTML end.
    */
   
    exports.rideHistory = function(req, res) {
        passengerBooking.find({NUID: req.params.id}, function(err, task) {
          if (err)
            res.send(err);
          res.json(task);
        });
      };




    //   exports.read_schedule = function(req, res) {
    //     weeklySchedule.find({carId: req.params.id}, function(err, task) {
    //       if (err)
    //         res.send(err);
    //       res.json(task);
    //     });
    //   };



    