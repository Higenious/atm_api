let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const bodyParser = require('body-parser');
let indexRouter = require('./routes/index_route');
let usersRouter = require('./routes/users_route');
let adminRouter = require('./routes/admin_route');
let database = require('../atm_api/database/db/dbConnection')
let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use((req, res, next) => {
    
    bodyParser.json()(req, res, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(400); // Bad request
        }

        next();
    });
});

module.exports = app;
