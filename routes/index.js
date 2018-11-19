  // IMPORTANT
  // PLEASE Read the Readme.txt before you run the application //
  var express = require('express');
  var router = express.Router();
  var cv = require('../db.json');

  var signedInAs = "Anonymous User";

  /* GET home page. */
  router.get('/', function (req, res, next) {

    res.render('index', { title: "Profile", data: cv, signedup: signedInAs });

  });
  /* POST to home page. */

  router.post('/', function (req, res, next) {
  
    signedInAs = "Signed in as " + req.body.username;
    res.redirect('/');
  });

  module.exports = router;

