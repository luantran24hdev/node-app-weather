
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);  
const Schema = mongoose.Schema;




const Course = new Schema({
  name:{type:String, require:true},
  description: {type:String, require:true},
  thumb: {type:String,},
  VideoId: {type:String, require:true},
  slug: { type: String, slug: 'name' }
  
},{
  timestamps: true,
});


module.exports = mongoose.model('Course', Course);
