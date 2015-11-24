// npm install express
var express = require('express');

var app = express();

app.use(express.static(__dirname + "/public"));

//note for bootstrap=>  npm install bootstrap

// {go to the application dir and issue the cmd} npm install log4js
var log4js = require('log4js');
log4js.configure({
    appenders: [{type: 'console'},
        {type: 'file', filename: 'express.log', category: 'dev'}]
});
var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));

app.get('/api/users', function (request, response) {
    console.log('Received Get Request in server');
    var adarsh ={
        firstName :"adarsh"
        ,lastName :"kumar"
        ,imageSrc:"image/adarsh.JPG"
    };
    response.json(adarsh);
});

app.listen(8080, 'localhost', function () {
    logger.info('listening on http://localhost:8080');
});