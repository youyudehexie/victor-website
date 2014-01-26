var fs = require('fs');
var path = require('path');

var routes = {};

fs.readdirSync(__dirname + '/controllers').forEach(function (filename) {
  if (!/\.js$/.test(filename)) {
    return;
  }
  var name = path.basename(filename, '.js');

  function load() {
    return require('./controllers/' + name);
  }
  routes.__defineGetter__(name, load);
  routes.__defineGetter__(name, load);
});

module.exports = function(app){

    app.get('/category/:type', routes.index.category);
    app.get('/production', routes.index.production);
}
