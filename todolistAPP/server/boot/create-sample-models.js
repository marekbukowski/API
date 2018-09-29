/*
'use strict';

module.exports = function(app) {
  app.dataSources.nodeApi.automigrate('todolistAPP', function(err) {
    if (err) throw err;
    app.models.todolistAPP.create([{
      title: 'Meet Frank',
      description: 'Tell about new job',
      isComplete: false,
    }], function(err, todolistAPPs) {
      if (err) throw err;
      console.log('Models created: \n', todolistAPPs);
    });
  });
};

*/
