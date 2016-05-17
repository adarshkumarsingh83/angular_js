/**
 * Created by Adarsh on 7/24/15.
 */


myBasicAngularApplicationRoot1.factory("MyAppFactory1" , [ function(){

    var messageVar = "Welcome To Application From 1st Stream";

    function getMessageFromFactory() {
        console.log("MyAppFactory1");
        return messageVar;
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);

