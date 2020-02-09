"use strict";

module.exports = function(app) {
  var emergencyContacts = require("../controllers/emergencyController");
    //Emergencies Routes
    app.route("/emergency").get(emergencyContacts.viewEmergencyContacts);
    //app.route("/notifications/add").post(notifications.addNotifications);
    //app.route("/notifications/update/:id").post(driver.updateDriverDetails);
};