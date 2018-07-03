var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var hbs = require('hbs');

var hbsutils = require('hbs-utils')(hbs);

let flash = require('connect-flash');
//let loginFlash = require('./routes/login-flash');
let expressSessions = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
let admin = require('./routes/admin');
var login = require('./routes/login');
var register = require('./routes/register');
const hbsEmail = require('nodemailer-express-handlebars');
let integration = require('./routes/integration');
let regeneration = require('./routes/regeneration');
var multer = require('./routes/multer');


var app = express();

hbsutils.registerPartials(`${__dirname}/views/partials`);
hbsutils.registerPartials(`${__dirname}/views/partials`);


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
hbs.registerPartials('${_dirname}/views/partials');

//Gestión de sesiones.
app.use(expressSessions({
    secret: 'GeekshubsAcademy',
    name: 'SesionGeek',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

// uncomment after placing your favicon in /public

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/components', express.static(`${__dirname}/public/components`));

app.use('/', index);

app.use('/users', users);
app.use('/admin', admin);

app.use('/login', login);
app.use('/register', register);
app.use('/integration', integration);
app.use('/regeneration', regeneration);
app.use('/multer', multer);



// catch 404 and forward to error handler

app.use(function(req, res, next) {

    var err = new Error('Not Found');

    err.status = 404;

    next(err);

});



// error handler

app.use(function(err, req, res, next) {

    // set locals, only providing error in development

    res.locals.message = err.message;

    res.locals.error = req.app.get('env') === 'development' ? err : {};



    // render the error page

    res.status(err.status || 500);

    res.render('error');

});


module.exports = app;