var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  fs = require('file-system'),
  path = require('path'),
  cors = require('cors');

  //var MongoClient = require('mongodb').MongoClient;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/redeye', {
  useMongoClient: true
});

// add cors 
app.use(cors({
  origin:'http://localhost:4200'
}));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully!!");
});


//this includes all the models under the models folder
fs.readdirSync(__dirname + '/api/models').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/api/models/' + filename)
});

// view engine setup
app.set('views', path.join(__dirname, 'api/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });


var usersRouter = require('./api/routes/userRoutes'); //importing route
app.use('/users', usersRouter);
var routesb = require('./api/routes/bookRide'); //importing route
routesb(app); //register the route
var routesd = require('./api/routes/driverRoutes'); //importing route
routesd(app);
var notificationRt = require('./api/routes/notifications'); //importing route
notificationRt(app); //register the route
var emergency = require('./api/routes/emergencies'); //importing route
emergency(app); 
var routes = require('./api/routes/driverRoutes'); //importing route
routes(app); //register the route
var scheduleRoute = require('./api/routes/scheduleRoutes');
scheduleRoute(app);
app.listen(port);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('Red Eye RESTful API server started on: ' + port);
