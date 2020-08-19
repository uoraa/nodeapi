const _var = require('./env');
var colors = require('colors');
const splash = _var.splash;
const server = _var.server;
var init = splash.messageConsole;

var express = require('express'),
    app = express(),
    port = process.env.PORT || server.port,
    mongoose = require('mongoose'),
    Task = require('./api/models/model'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

function messaging(message) {
    console.clear();
    console.log(init);
    console.log(colors.grey(message));
}

app.listen(port, function () {
    messaging("Running at: " + server.local + port);
});