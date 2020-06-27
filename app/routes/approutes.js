'use strict';
module.exports = function(app) {
  var register = require('../controllers/appController');

  // todoList Routes
  app.route('/register')
    .get(register.list_all_register)
    .post(register.create_a_register);
   
   app.route('/register/:registerId')
    .get(register.read_a_register)
    .put(register.update_a_register)
    .delete(register.delete_a_register);
    };