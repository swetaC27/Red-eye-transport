'use strict';
module.exports = function(app) {
  var userBooking = require('../controllers/confirmedRider');

  // todoList Routes
  app.route('/bookRide/confirm/:id')
    .get(userBooking.readConfirmedRide)
    //.get(driverSchedule.readweeklyschedule);


};