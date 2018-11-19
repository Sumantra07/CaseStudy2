// IMPORTANT
// PLEASE Read the Readme.txt before you run the application //
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var mongoose = require("mongoose");

// Creating routes
var indexRouter = require('./routes/index');
var notesRouter = require('./routes/notes');

mongoose
  .connect(
    "mongodb://localhost/NoteManager",
    { useNewUrlParser: true }
  )
  .then(function () {
    console.log("DB Connected!");
  });

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// using Middlewares
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());

app.use('/', indexRouter);
app.use('/notes', notesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Used this only for temporary development purposes.Stores used login data. Less prefered way. will be replaced by MongoDB
global.userCredentials = new Map();

module.exports = app;
