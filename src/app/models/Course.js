
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const Course = new Schema({
  name:{type:String, require:true},
  description: {type:String, require:true},
  thumb: {type:String, require:true},
  VideoId: {type:String, require:true},
  
},{
  timestamps: true,
});


module.exports = mongoose.model('Course', Course);
