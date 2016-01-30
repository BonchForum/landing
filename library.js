(function(module){ 
  'use strict';

  var Landing = {};

  Landing.init = function(params, callback) {
    var app = params.router;
    
    app.get('/promo',function(req, res) {
      res.sendFile(__dirname + '/index.html');
    });

    app.use('/promo', express.static(__dirname + '/assets'));
    app.use('/promo', express.static(__dirname + '/images'));
  }

  module.exports = Landing;
}(module));