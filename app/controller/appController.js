'use strict';

var Register = require('../model/appModel.js');

exports.list_all_register = function(req, res) {
  Register.getAllRegister(function(err, register) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', register);
    res.send(register);
  });
};



exports.create_a_register = function(req, res) {
  var new_register = new Register(req.body);
    //handles null error 
   if(!new_register.register || !new_register.status){

            res.status(400).send({ error:true, message: 'Please provide register/status' });

        }
else{
  
  Register.createRegister(new_register, function(err, register) {
    
    if (err)
      res.send(err);
    res.json(register);
  });
}
};
exports.read_a_register = function(req, res) {
  Register.getRegisterById(req.params.registerId, function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.update_a_register = function(req, res) {
  Register.updateById(req.params.registerId, new Register(req.body), function(err, register) {
    if (err)
      res.send(err);
    res.json(register);
  });
};


exports.delete_a_register = function(req, res) {


  Register.remove( req.params.registerId, function(err, register) {
    if (err)
      res.send(err);
    res.json({ message: 'Registeration successfully deleted' });
  });
};
