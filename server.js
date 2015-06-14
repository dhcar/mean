// console.log("hello");

var express       	  = require('express'),
	app               = express(),
	meetupsController = require('./server/controllers/meetups-controller.js'),
	bodyParser        = require('body-parser');

app.use(bodyParser());

app.get('/', function(req,res){
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
	console.log("I'm listening");
});