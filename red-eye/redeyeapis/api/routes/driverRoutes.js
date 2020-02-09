"use strict";

module.exports = function(app) {
  var driver = require("../controllers/driverController");

  //driver Routes
  app.route("/driverDetails/:id")
  .get(driver.viewDriverDetails);
  
  //app.route("/driverDetails/add")
  //.post(driver.addDriverDetails);

  app.route("/driverDetails/update/:id")
  .post(driver.updateDriverDetails);

  //app.route("/driverDetails/updateStatus/:id")
  //.post(driver.updateDriverStatus);

  app.route("/driverDetails")
  .get(driver.listAllDrivers);

  //app.route("/driverDetails/delete/:id")
  //.delete(driver.deleteDriverDetails);
  
  app.route("/driverDetails/rides/:id")
  .get(driver.rides);

  app.route("/driverDetails/updateRideStatus/:id")
  .post(driver.updateRideStatusForPassenger);

};
