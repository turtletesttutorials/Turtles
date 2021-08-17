var express = require('express');
var router = express.Router();
var Turtle = require('../models/turtle')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , username: "Peter"});
});

//www.mysitename.com/turtlelist
router.get('/turtlelist', function(req, res, next) {
  
  Turtle.find({}, 'name', function (err, turtleListData){
    if(err) return next(err);
    res.render('turtle_list', {title: 'Turtle List', turtle_list: turtleListData});
  
  });
  

});

module.exports = router;
