var express=require('express')
var app=express()
var cors=require('cors')

var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/test")
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'))
app.use(cors())
var router=require('./router')
app.set('views','./views')
app.set('view engine','jade')

app.use('/',router);
app.listen(3001,function(){
	console.log("Ex listen om port 3000")
});