(function(module){ 
  'use strict';

  var Landing = {};

  Landing.init = function(params, callback) {
    var app = params.router;

    app.use('/promo', express.static(__dirname + '/'));
  }

  module.exports = Landing;
}(module));