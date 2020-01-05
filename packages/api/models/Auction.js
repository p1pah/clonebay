var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var auctionSchema = new Schema({

  name      : String,

});


module.exports = mongoose.model( 'Auction', auctionSchema );