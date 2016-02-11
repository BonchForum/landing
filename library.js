(function(module) {
  'use strict';

  var Landing = {},
    express = module.parent.require('express');

  Landing.init = function(params, callback) {
    var app = params.router;

    app.use('/promo', express.static(__dirname + '/public'));
    
    callback();
  }

  module.exports = Landing;
}(module));