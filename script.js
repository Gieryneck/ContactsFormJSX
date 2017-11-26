var server = require('./modules/server');
server.start();

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
