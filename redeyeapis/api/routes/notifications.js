"use strict";

module.exports = function(app) {
  var notifications = require("../controllers/notificationsController");

    //notifications Routes
    app.route("/notifications/:id").get(notifications.viewNotifications);
    app.route("/notifications/add").post(notifications.addNotifications);
    //app.route("/notifications/update/:id").post(driver.updateDriverDetails);
};
