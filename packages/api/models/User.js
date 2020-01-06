var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var userSchema = new Schema({

  email: { type: String, required: true, trim: true},
  password: { type: String, required: true},
  accessToken: { type: String }
  

});


module.exports = mongoose.model( 'User', userSchema );