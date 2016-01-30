(function(module){ 
  'use strict';

  var Landing = {};

  Landing.init = function(params, callback) {
    var app = params.router;
    app.use(express.static(__dirname));
    
    app.get('/',function(req, res){
      res.sendFile('index.html');    
    });
  }

  module.exports = Landing;
}(module));