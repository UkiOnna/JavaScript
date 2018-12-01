var express =require('express')
var Blog =require('./models/news.js')
var router=express.Router();

router.get('/hi',function(req,res){
	res.send('hi');
})
router.get('/bye',function(req,res){
	res.send('bye')
})
router.get('/',function(req,res){
	res.send('Леха одобряет')
})
router.get('/page',function(req,res){
	res.render('index',{title:'Hey',message:"dsfdf"})
})

router.get('/create',function(req,res){
	var newBlog=new Blog({
		title:"Жека убийца!",
		body:"Он убил президента лайнс тим"
	})
	newBlog.save(function(err,blog){
		if(err){
			return res.status(422).json(err)
		}
		else{
			res.status(200).json(blog)
		}
	})
})
router.get('/news',function(req,res){
	Blog.find({}).exec(function(err,blog){
		if(err){
			return res.status(422).json(err)
		}
		else{
			res.status(200).json(blog)
		}
	})
})
module.exports=router;