'use strict';
module.exports = function(app) {
  var userOperation = require('../controllers/bookingController');

  // todoList Routes
  app.route('/bookRide/:id')
   // .get(userOperation.view_user_details)
    .get(userOperation.read_userlist);

    app.route('/bookRide/reserve')
    .post(userOperation.save);

    app.route("/bookRide/cancel/:id")
    .post(userOperation.updateBookingDetails);

    app.route("/bookRide/history/:id")
    .get(userOperation.rideHistory);


    // app.route('/bookRide/reserve/:id')
    // .get(userOperation.read_schedule);




};




