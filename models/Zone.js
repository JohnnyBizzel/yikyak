var mongoose = require('mongoose');

// var mongooseTypes = require("mongoose-types"); // use to check for a url datatype
// mongooseTypes.loadTypes(mongoose);



//Create a schema
var ZoneSchema = new mongoose.Schema({
  name: { type:String, default:''},
  zipCodes: {type:Array, default:[]},
  latitude: {type:Number, default:0},
  longditude: {type:Number, default:0},
  country: {type:String, default:'us'},
  timestamp: {type:Date, default:Date.now()}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);