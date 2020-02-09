
/*
Emergency DB model is making the one way bind and this will
make Notification aceesible and connection to mongoDB is established.
*/

const mongoose = require("mongoose"),
  //Driver = mongoose.model("Driver"),
  emergencyDirectory = mongoose.model("Emergency");

exports.viewEmergencyContacts = function(req, res) {
    emergencyDirectory.find({}, function(err, notifications) {
    if (err) res.send(err);
    else {
      console.log('------ notifications --------',notifications);
      res.json(notifications);
      //  returnObject.firstName = user.firstName;
      //  returnObject.lastName = user.lastName;
      /*Driver.findOne({ NUID: user.NUID }, function(err, driver) {
        if (err) res.send(err);
        else {
          if (driver != null) {
            returnObject.daysWorking = driver.daysWorking;
            returnObject.shiftTime = driver.shiftTime;
            returnObject.NUID = driver.NUID;

            res.json(returnObject);
          } else {
            res.json(user);
          }
        }
      });*/
    }
  });
};


/*
Notifications of the emergency details be there so that 
they are saved and 200 success code will allows us to give the 
proper properNotifcations.

.addNotification : This will allow us to add notification and saving it.

*/

exports.addNotifications = function(req, res) {
    console.log("------------------",req.body);
  let alerts = new alertsDirectory(req.body);

  // res.send(driver);
  alerts.save()
    .then(alerts => {
        res.status(200).json({ Notification: "Added successfully!" });
    })
    .catch(alerts => {
        res.status(400).send("Failed to create record");
    });
};


/*
daysWorking : driversSchedule days working will be notified.

If updation failed error message displayed 

.addNotification : This will allow us to add notification and saving it.

*/





exports.updateDriverDetails = function(req, res) {

    Driver.findOne({NUID: req.params.id}, (err, driver) => {
      if(!driver)
        return next(new Error("Could not load document"));
      else {
        driver.daysWorking = req.body.daysWorking;

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
