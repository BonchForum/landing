(function(module){ 
  'use strict';

  var Landing = {};

  Landing.init = function(params, callback) {
    var app = params.router;
    
    app.get('/promo',function(req, res) {
      res.sendFile('index.html');
    });
  }

  module.exports = Landing;
}(module));