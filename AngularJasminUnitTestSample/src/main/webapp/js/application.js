var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", [ "$scope" , "MyAppService" , function($scope , MyAppService) {
    console.log("MyAppController");
    $scope.applicationMsg = angular.uppercase(MyAppService.messageServiceValue());
}]);

myBasicAngularApplicationRoot.service("MyAppService",["MyAppFactory",function(MyAppFactory){

    function getMessageFromService(){
        console.log("MyAppService");
        return MyAppFactory.messageFactoryValue();
    }

    return{
       messageServiceValue: getMessageFromService
    };
}]);

myBasicAngularApplicationRoot.factory("MyAppFactory" , [ function(){

    var messageVar = "Welcome To Application";

    function getMessageFromFactory() {
        console.log("MyAppFactory");
        return messageVar;
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);
