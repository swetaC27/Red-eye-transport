/*Require the Weeklyschedule database access to the schedule 
for the driver and this will allow for Rider weekly schedule for 
driver to be allocated

*/
'use strict';
const createError = require('http-errors');


var mongoose = require('mongoose'),
  weeklyschedule = mongoose.model('RiderWeeklySchedule');

/*

Finding the weeklyschedule by the object id that allows for 
unique id to be referred to for the schedule
*/


  exports.readweeklyschedule = function(req, res) {
    weeklyschedule.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };