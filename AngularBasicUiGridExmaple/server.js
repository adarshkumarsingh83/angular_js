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


application.get('/api/get/all', function (request, response) {
    logger.info("Request for Fetching All User");
    response.json([
        {
            "username":"adarsh",
            "firstName": "Adarsh",
            "lastName": "Kumar",
            "company": "Espark",
            "email":"adarsh@kumar",
            "phone":"999999999999",
            "employed": true,
            "salary":"7820345",
            "age":33
        },
        {
            "username":"amit",
            "firstName": "Amit",
            "lastName": "Kumar",
            "company": "Hp",
            "email":"amit@kumar",
            "phone":"999999999999",
            "employed": true,
            "salary":"7820345",
            "age":30
        },
        {
            "username":"radha",
            "firstName": "Radha",
            "lastName": "Singh",
            "company": "Wipro",
            "email":"radha@singh",
            "phone":"999999999999",
            "employed": true,
            "salary":"7820345",
            "age":30
        },
        {
            "username":"sonu",
            "firstName": "Sonu",
            "lastName": "Singh",
            "company": "Espark",
            "email":"sonu@singh",
            "phone":"999999999999",
            "employed": false,
            "salary":"7820345",
            "age":33
        },
        {
            "username":"monu",
            "firstName": "Monu",
            "lastName": "Singh",
            "company": "Espark",
            "email":"monu@singh",
            "phone":"999999999999",
            "employed": false,
            "salary":"7820345",
            "age":30
        },
        {
            "username":"usha",
            "firstName": "Usha",
            "lastName": "Singh",
            "company": "Army",
            "email":"usha@singh",
            "phone":"999999999999",
            "employed": false,
            "salary":"7820345",
            "age":54
        },
        {
            "username":"niranjan",
            "firstName": "Niranjan",
            "lastName": "Singh",
            "company": "Army",
            "email":"niranjan@singh",
            "phone":"999999999999",
            "employed": false,
            "salary":"7820345",
            "age":55
        }
    ]);
});


application.listen(3000, 'localhost');
logger.info("localhost:3000");