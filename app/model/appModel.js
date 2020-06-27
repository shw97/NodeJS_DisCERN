'user strict';
var sql = require('./db.js');

//object constructor
var Register = function(register){
    this.register = register.register;
    this.status = register.status;
    this.created_at = new Date();
};
Register.createRegister = function (newRegister, result) {    
        sql.query("INSERT INTO register set ?", newRegister, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Register.getRegisterById = function (registerId, result) {
        sql.query("Select * from register where id = ? ", registerId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Register.getAllRegister = function (result) {
        sql.query("Select * from register", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('register : ', res);  

                 result(null, res);
                }
            });   
};
Register.updateById = function(id, register, result){
  sql.query("UPDATE register SET name = ? WHERE id = ?", [register.register, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Register.remove = function(id, result){
     sql.query("DELETE FROM register WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Register;