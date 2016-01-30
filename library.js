(function(module) {
  'use strict';

  var Landing = {},
    express = module.parent.require('express');

  Landing.init = function(params, callback) {
    var app = params.router;

    // app.get('/promo', function(req, res) {
    //   res.sendFile(__dirname + '/index.html');
    // });

    app.use('/promo', express.static(__dirname + '/public'));
    // app.use('/promo', express.static(__dirname + '/images'));
  }

  module.exports = Landing;
}(module));