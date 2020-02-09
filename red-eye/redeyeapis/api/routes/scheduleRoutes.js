"use strict";

module.exports = function(app) {
  var ride = require("../controllers/scheduleController");

  //driver Routes
  app.route("/schedule")
  .get(ride.viewAllSchedule);
 // .get(ride.viewScheduledDetails);
//  .get(ride.viewDriverDetails);
//  .get(ride.viewCarDetails);
  //.put(driver.updateDriverDetails)

  app.route("/schedule/:nuid")
  .get(ride.viewDriverSchedules);

  app.route("/schedule/add")
  .post(ride.addSchedule);

  app.route("/schedule/update/:id")
  .post(ride.updateScheduleDetails);

  /*app.route("/schedule/delete/:id")
  .delete(ride.deleteDriverDetails);*/
};
