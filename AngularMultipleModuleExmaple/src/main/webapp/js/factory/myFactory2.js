/**
 * Created by Adarsh on 7/24/15.
 */
myBasicAngularApplicationRoot2.factory("MyAppFactory2" , [ function(){

    var messageVar = "Welcome To Application From 2nd Stream";

    function getMessageFromFactory() {
        console.log("MyAppFactory2");
        return messageVar;
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);