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


application.listen(3000, 'localhost');
logger.info("localhost:3000");