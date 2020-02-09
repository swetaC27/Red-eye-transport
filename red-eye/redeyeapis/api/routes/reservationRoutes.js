"use strict";

module.exports = function(app) {
  var reserve = require("../controllers/reservationController");

  //driver Routes
  app.route("/reservationDetails")
  .get(reserve.viewScheduledDetails);
  //.put(driver.updateDriverDetails)

  app.route("/reservationDetails/add")
  .post(reserve.addSchedule);

  app.route("/reservationDetails/update/:id")
  .post(reserve.updateScheduleDetails);

  //app.route("/scheduleDetails")
  //.get(driver.listAllDrivers);

 /* app.route("/reservationDetails/delete/:id")
  .delete(reserve.deleteDriverDetails);*/
};
