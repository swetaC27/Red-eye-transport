const mongoose = require("mongoose"),
  Driver = mongoose.model("Driver"),
  NortheasternActiveDirectory = mongoose.model("NortheasternUniversityAD"),
  ReservationModel = mongoose.model("Reservation");

let returnObject = {
  firstName: "",
  lastName: "",
  daysWorking: [],
  shiftTime: '',
  NUID: '',
  status: ''
};


var returnDriverRides = {
  id: "",
  NUID: "",
  firstName: "",
  lastName: "",

  source: "",
  destination: "",
  slot: "",
  rideStatus: "",
  driverID: "",
  date: "",
  carId: ""
};

var ridesList = [];

/*
listAllDrivers : The drivers will be listed and this method
will allow us to find all the drivers from the MongoDB.

*/

exports.listAllDrivers = function (req, res) {
  Driver.find({}, function (err, driver) {
    if (err)
      res.send(err);
    res.json(driver);
  });
};


/*
NUID as a parameter will allow for for finding one particular 
driver details and if the driver is present then the firstName and 
lastName will be displayed and set to the returnObject.

Nuid of driver is also referred and will be used for fetching from
NUActive directory.

*/



exports.viewDriverDetails = function(req, res) {
  NortheasternActiveDirectory.findOne({ NUID: req.params.id }, function(err,user) {

    if (err) res.send(err);
    else {
      returnObject.firstName = user.firstName;
      returnObject.lastName = user.lastName;
      Driver.findOne({ NUID: user.NUID }, function(err, driver) {
        if (err) res.send(err);
        else {
          if (driver != null) {
            returnObject.daysWorking = driver.daysWorking;
            returnObject.shiftTime = driver.shiftTime;
            returnObject.NUID = driver.NUID;
            returnObject.status = driver.status;
            res.json(returnObject);
          } else {
            res.json(user);
          }
        }
      });
    }
  });
};

let returnDrivers = {
  firstName: '',
  lastName: '',
  NUID: '',
  status: '', 
  daysWorking: '',
  shiftTime: ''
};

exports.listAllDrivers = (req, res) => {
  driverList = [];
  var obj = {};
  Driver.find((err, driver) => {
    if (!driver) {
      return next(new Error("Could not load document"));
    } else {
      let i = 0;
      let tmpList = [];
      driver.forEach(ride => {
        returnDrivers = {};
        returnDrivers.NUID = ride.NUID;
        returnDrivers.status = ride.status;
        returnDrivers.daysWorking = ride.daysWorking;
        returnDrivers.shiftTime = ride.shiftTime;
        tmpList.push(returnDrivers);
      });
      tmpList.forEach(rideV => {
        var query = NortheasternActiveDirectory.findOne({
          NUID: rideV.NUID
        });
        query.then(function (doc) {
          rideV.firstName = doc.firstName;
          rideV.lastName = doc.lastName;
          driverList.push(rideV);
          i++;
          if (tmpList.length == i) {
            res.json(driverList);
          }
        });
      })
    }
  });
};


// exports.listDriverDetails = function(req, res) {
//   Driver.find(function(err, drivers) {
    
//     drivers.forEach(driver => {
//       //returnDrivers.NUID = driver.NUID;
//       NortheasternActiveDirectory.findOne({NUID: driver.NUID}, function(err, nudir){
//           res.json(nudir.firstName);
//       });
//     });
//   });

// }




// if (err) res.send(err);
// else {
//   returnObject.firstName = user.firstName;
//   returnObject.lastName = user.lastName;
//   Driver.findOne({ NUID: user.NUID }, function(err, driver) {
//     if (err) res.send(err);
//     else {
//       if (driver != null) {
//         returnObject.daysWorking = driver.daysWorking;
//         returnObject.shiftTime = driver.shiftTime;
//         returnObject.NUID = driver.NUID;

//         res.json(returnObject);
//       } else {
//         res.json(user);
//       }
//     }
//   });
// }
// });
//};



/*
Adding driver details is the method where function will be creating a 
new driver and 200 success code will determine the proper creation and 
adding the row in mongoDB.

Error code 400 --> Specify that creation of record failed and hence catching the block.
*/

exports.addDriverDetails = function (req, res) {
  let driver = new Driver(req.body);
  // res.send(driver);
  driver
    .save()
    .then(driver => {
      res.status(200).json({
        Driver: "Added successfully!"
      });
    })
    .catch(driver => {
      res.status(400).send("Failed to create record");
    });
};


/*
Deletion of the driver details and this will update the status 
.remove --> this will allow for deletion of driver details.

*/

exports.updateDriverDetails = function (req, res) {
  Driver.findOne({
    NUID: req.params.id
  }, (err, driver) => {
    if (err)
      res.send(err);
    res.json({
      message: 'Driver successfully deleted'
    });
  });
};


/*
Updation of Driver Details : This will lead to updation of driver details 
so that timely check is with to meet with the latest details.
*/

exports.updateDriverDetails = function(req, res) {
  Driver.findOne({ NUID: req.params.id }, (err, driver) => {
    if (!driver) return next(new Error("Could not load document"));
    else {
      driver.daysWorking = req.body.daysWorking;

      driver
        .save()
        .then(issue => {
          res.json("Update done");
        })
        .catch(err => {
          res.status(400).send("Update failed");
        });
    }
  });
};


/*

driverID will be associated with the the rides that they pick up and the 
source and destination alongside ridestatus which will be allowing the driver to 
update noShow , completed and would be returning an object that has the ride details 
that the driver is going to be taking ahead.

*/


exports.rides = (req, res) => {
 ridesList = [];
 var obj = {};
  ReservationModel.find({ driverID: req.params.id }, (err, rideDetails) => {
    if (!rideDetails) {
      return next(new Error("Could not load document"));
    } else {
      //res.send(rideDetails);
      let i = 0;
      let tmpList = [];
      rideDetails.forEach(ride => {
        returnDriverRides = {};
        returnDriverRides.id = ride._id;
        returnDriverRides.NUID = ride.NUID;
        returnDriverRides.source = ride.source;
        returnDriverRides.destination = ride.destination;
        returnDriverRides.date = ride.date;
        returnDriverRides.driverID = ride.driverID;
        returnDriverRides.slot = ride.slot;
        returnDriverRides.rideStatus = ride.rideStatus;
        returnDriverRides.carId = ride.carId;
        tmpList.push(returnDriverRides);
      });

      tmpList.forEach( rideV => {
        var query = NortheasternActiveDirectory.findOne({ NUID: rideV.NUID });
        query.then(function (doc) {
          rideV.firstName = doc.firstName;
          rideV.lastName = doc.lastName;
          ridesList.push(rideV);
          i++;
          if(tmpList.length == i){
            res.json(ridesList);
          }  
        });
      })

    }
  });
};



/*

Ride status updation for the passenger will be the safest option 
for correctly marking the safe drop of the passenger

Completed specifies that the ridestatus successfully completed.
*/



exports.updateRideStatusForPassenger = (req, res) => {
    //console.log(req);
    ReservationModel.findById(req.params.id, function(err, booking) {

        booking.rideStatus = req.body.status;
        if(req.body.status === 'Completed') {
          booking.dropOffTime = millisecondsToTime(new Date().getTime());
        }
        

        booking.save()
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.status(400).send(err);
        });
    });

}

function millisecondsToTime(milli)
{
  var d = new Date(parseInt(milli, 10)); 
  var ds = d.toString('MM/dd/yy HH:mm:ss');
  return ds;
}

