var mongoose=require('mongoose')
var Schema=mongoose.Schema
var blogSchema=new Schema({
    title: String,
    body: String,
    date:{type:Date,default: Date.now()},
    hidden:Boolean
});
var News=mongoose.model('News',blogSchema)
module.exports=News;



