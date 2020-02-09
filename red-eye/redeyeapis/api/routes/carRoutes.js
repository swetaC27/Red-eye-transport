"use strict";

module.exports = function(app) {
  var car = require("../controllers/carController");

  //driver Routes
  app.route("/driverDetails/:id")
  .get(driver.viewDriverDetails);
  //.put(driver.updateDriverDetails)

  app.route("/driverDetails/add")
  .post(driver.addDriverDetails);

  app.route("/driverDetails/update/:id")
  .post(driver.updateDriverDetails);
};
