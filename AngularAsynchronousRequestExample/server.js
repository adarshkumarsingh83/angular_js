// {go to the application dir and issue the cmd} npm install express
var express = require('express');
var application = express();
application.use(express.static(__dirname + "/public"));

// {go to the application dir and issue the cmd} npm install log4js
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: 'log/express.log', category: 'dev'}
    ]
});

var logger = log4js.getLogger('dev');
logger.setLevel('ALL');
application.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));
var data ={
      msg : "Welcome from service 1",
      time : new Date()
};

application.get('/api/data/1', function (request, response) {
    logger.info("Request for Fetching Data");
    response.json({
        msg : "Welcome from service 1",
        time : new Date()
    });
});

application.get('/api/data/2', function (request, response) {
    logger.info("Request for Fetching Data");
    response.json({
        msg : "Welcome from service 2",
        time : new Date()
    });
});

application.get('/api/data/3', function (request, response) {
    logger.info("Request for Fetching Data");
    response.json({
        msg : "Welcome from service 3",
        time : new Date()
    });
});

application.get('/api/data/4', function (request, response) {
    logger.info("Request for Fetching Data");
    response.json({
        msg : "Welcome from service 4",
        time : new Date()
    });
});

application.get('/api/data/5', function (request, response) {
    logger.info("Request for Fetching Data");
    response.json({
        msg : "Welcome from service 5",
        time : new Date()
    });
});

application.listen(3000, 'localhost');
logger.info("localhost:3000");