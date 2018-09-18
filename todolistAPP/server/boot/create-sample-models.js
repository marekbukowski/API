/*
'use strict';

module.exports = function(app) {
  app.dataSources.apidb.automigrate('todolistAPP', function(err) {
    if (err) throw err;
    app.models.todolistAPP.create([{
      title: 'Go to the gym',
      description: 'Workout for one our',
      isComplete: true,
    }], function(err, todolistAPPs) {
      if (err) throw err;
      console.log('Models created: \n', todolistAPPs);
    });
  });
};

*/
