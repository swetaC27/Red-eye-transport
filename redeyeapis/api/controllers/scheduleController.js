const mongoose = require("mongoose"),
    Driver = mongoose.model("Driver"),
    RiderWeeklySchedule = mongoose.model("RiderWeeklySchedule");
Car = mongoose.model("Car");

exports.viewAllSchedule = function (req, res) {
    RiderWeeklySchedule.find({}, function (err, rideWeekly) {
        if (err)
            res.send(err);
        res.json(rideWeekly);
    });
};

/* exports.viewDriverDetails = function (req, res) {
    Driver.find({}, function (err, driver) {
        if (err)
            res.send(err);
        res.json(driver);
    });
};

/*
viewCarDetails: Viewing car details

car details will be found and is accessible later.

*/


exports.viewCarDetails = function (req, res) {
    Car.find({}, function (err, cars) {
        if (err)
            res.send(err);
        res.json(cars);
    });
};

let returnObject = {
    scheduleId: '',
    NUID: '',
    shiftTime: '',
    daysWorking: '',
    status: '', 
    carId: '',
    rideDate: '',
    dayOfTheWeek : '', 
    slotTime: '',
};


exports.viewScheduledDetails = function (req, res) {
    RiderWeeklySchedule.find(function (err, user) {
        if (err) res.send(err);
        else {
            let i = 0;
            let tempArr = [];

            user.forEach(element => {
                let temp = [];
                tempArr.push(element);
            });
            tempArr.forEach(element => {
                var listObj = [];
                var query = Driver.find(element.NUID);
                query.then(function (driver) {
                    driver.forEach(ele => {
                        if (ele != null) {
                            returnObject = {};
                            returnObject.NUID = element.NUID;
                            returnObject.carId = element.carId;
                            returnObject.rideDate = element.rideDate;
                            returnObject.dayOfTheWeek = element.dayOfTheWeek;
                            returnObject.daysWorking = ele.daysWorking;
                            returnObject.shiftTime = ele.shiftTime;
                            returnObject.NUID = ele.NUID;
                            returnObject.status = ele.status;
                            listObj.push(returnObject);
                        }
                        if (Driver.length == i) {
                            res.json(listObj);
                        }
                    })
                    i++;
                });
            });
        }
    });
}



/*

-->Required for viewing of DriverSchedules
NUID is the paramter used for viewing as for each driver they
would have unique Driver ID : NUID.

*/



exports.viewDriverSchedules = function (req, res) {
    RiderWeeklySchedule.findOne({
        NUID: req.params.nuid
    }, function (err, user) {
        if (err) res.send(err);
        else {
            console.log('-----req.params.nuid', req.params.nuid);
            //returnObject.firstName = user.firstName;
            //returnObject.lastName = user.lastName;
            Driver.findById(req.params.nuid, function (err, driver) {
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


/*Adding the schedule using post method will essentailly make it
allow for POST METHOD and this will enhance the scedule to be added in mongoDB.

*/


exports.addSchedule = function (req, res) {
    let RideWeekly = new RiderWeeklySchedule(req.body);
    console.log(req.body);
    RideWeekly.save()
        .then(RideWeekly => {
            res.send(RideWeekly);
            console.log('------------', res);
            /*res.status(200).json({
                RideWeekly: "Added successfully!"
            });*/
        })
        .catch(RideWeekly => {
            res.status(400).send("Failed to create record");
        });
};



/*Updating the schedule using post method will essentailly make it
allow for PUT METHOD and this will enhance the scedule to be added in mongoDB.

*/

exports.updateScheduleDetails = function (req, res) {

    RiderWeeklySchedule.find({
        scheduleId: req.params.id
    }, (err, driver) => {
        if (!driver)
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

/*
Delete Driver details :

Post method for updation.

*/




/*exports.deleteDriverDetails = function (req, res) {
    Driver.remove({
        NUID: req.params.id
    }, (err, driver) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Driver successfully deleted'
        });
    });
};*/