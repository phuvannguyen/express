var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose');
var csurf = require('csurf');

mongoose.connect("mongodb://localhost:27017/express-database",  {
useUnifiedTopology: true,
useNewUrlParser: true,
})


var userRoutes =require('./Router/user.router');
var authRoutes = require('./Router/auth.route');
var productRoutes = require('./Router/product.route');
var cartRoutes = require('./Router/cart.router');
var apiRouter = require('./api/router/product.router');
var userapiRouter = require('./api/router/user.router');
var transferRouter = require('./Router/transfer.route')



var requireCookie = require("./Middleware/auth.validate");
var sessionMiddleware = require("./Middleware/session.middleware")

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode
app.use(cookieParser("dffjkdfjdkj33djfkfd"));
app.use(csurf({cookie: true}));
app.use(sessionMiddleware);



var port = 3000;


app.set("view engine", "pug")
app.set("views", "./view")

app.get('/', function(req, res) {
	res.render('index', {name: 'AAA'})
});

app.use('/user', requireCookie.cookie, userRoutes);
app.use('/auth', authRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/api/product', apiRouter);
app.use('/api/user', userapiRouter);
app.use('/transfer', requireCookie.cookie, transferRouter)

app.use(express.static('public'));

app.listen(port, function(req, res) {
	console.log('Example app listening on port ' + port)

})