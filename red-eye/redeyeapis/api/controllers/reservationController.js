/*
Reservation and riderWeekly Schedule will be the models 
that will be using and hence mongoDB connection made.
*/

const mongoose = require("mongoose"),
  reservation = mongoose.model("Reservation");
  riderWeeklySchedule = mongoose.model("RiderWeeklySchedule");  

reservationList = [];

let returnObjects = {
  firstName: '',
  lastName: '',
  type: '',
  daysWorking: [],
  shiftTime:'',
  NUID: ''
};

/*
viewReservationDetails : 

Viewing reservations : The riderWeekly Schedule model will be 
having to check for the reservation and letting us to the firstName
and lastName alongside NUID and this will also for finding one using 
NUID. 


*/


  exports.viewReservationDetails = function(req, res) {
    riderWeeklySchedule.find(function(err, users) {
      if (err) res.send(err);
      else {
        users.forEach(user => {
            returnObjects.firstName = user.firstName;
            returnObjects.lastName = user.lastName;
            returnObjects.NUID = user.NUID;
            reservation.findOne({ NUID: user.NUID }, function(err, rideWeekly) {
            returnObjects.status = user.status;
        });
        reservationList.push(returnObjects);
        res.json(reservationList);
      });
    
        }
   });
  };


/*
Add Schedule will allow for adding a new schedule and 
this will allow us for using POST method for doing so that
.save()
 method will save all the attributes.
*/


exports.addSchedule = function (req, res) {
    let RideWeekly = new RiderWeeklySchedule(req.body);
    console.log(req.body);
    RideWeekly.save()
        .then(RideWeekly => {
            res.send(RideWeekly);
            console.log('------------',res);
            res.status(200).json({
                RideWeekly: "Added successfully!"
            });
        })
        .catch(RideWeekly => {
            res.status(400).send("Failed to create record");
        });
};


exports.updateScheduleDetails = function (req, res) {

    RiderWeeklySchedule.find({
        scheduleId: req.params.id
    }, (err, driver) => {
        if (!driver)
            return next(new Error("Could not load document"));
        else {
            driver.status = req.body.status;

            driver.save()
                .then(issue => {
                    res.json('Update done');
                })
                .catch(err => {
                    res.status(400).send('Update failed');
                })
        }
    });

} 

/*exports.deleteReservationDetails = function (req, res) {
    Driver.remove({
        NUID: req.params.id
    }, (err, driver) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Schedule successfully deleted'
        });
    });
};*/