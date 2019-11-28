var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	cors = require('cors'),
	Work = require('./api/models/fulcrumModel'), //created model loading here
	// Author = require('./api/models/fulcrumModel1'),
  	bodyParser = require('body-parser');
 
	//  app.use(function (req, res, next) {
	//    res.header("Access-Control-Allow-Origin", "*");
	//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	//    next();
	//  });

	 app.use(cors())

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fulcrumdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/fulcrumRoutes'); //importing route
routes(app); //register the route

// var routes1 = require('./api/routes/fulcrumRoutes1'); //importing route1
// routes1(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('fulcrum RESTful API server started on: ' + port);