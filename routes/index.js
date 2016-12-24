var express = require('express');
var router = express.Router();

console.log("in dir routes / index");
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("get route /");
  res.render('index', { title: 'Express' });
});

router.get("/createzone",function(req,res,next){
res.render("createzone",null);

});

router.get("/createcomment",function(req,res,next){
res.render("createcomment",null);

});


module.exports = router;
