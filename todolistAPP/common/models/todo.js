/**
 * Extends API, and giving status method
 */

'use strict';

module.exports = function(TodolistAPP) {
  TodolistAPP.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var START_OUR = 9;
    var END_OUR = 17;
    console.log('Current hour is %d', currentHour);
    var response;
    if (currentHour >= START_OUR && currentHour < END_OUR) {
      response = 'Work hard';
    }    else {
      response = 'Out of work. Work hours from 9am to 17pm.';
    }
    cb(null, response);
  };
  TodolistAPP.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get',
      },
      returns: {
        arg: 'status',
        type: 'string',
      },
    }
);
};
