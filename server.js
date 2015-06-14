// console.log("hello");

var express       	  = require('express'),
	app               = express(),
	meetupsController = require('./server/controllers/meetups-controller.js'),
	mongoose = require('mongoose'),
	bodyParser        = require('body-parser');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());



app.get('/', function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

// rest api
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
	console.log("I'm listening");
});