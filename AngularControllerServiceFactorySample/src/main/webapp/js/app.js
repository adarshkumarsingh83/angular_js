var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

 myBasicAngularApplicationRoot
     .controller("MyAppController", ["$scope", "MyAppService", function ($scope, MyAppService){
    $scope.angularMsg = MyAppService.serviceValueMessage();
    $scope.firstName = "Enter ";
    $scope.lastName = "Enter ";
}]);


myBasicAngularApplicationRoot
    .service("MyAppService", [ "MyAppFactory", function (MyAppFactory) {

        function getFactoryMessage() {
            return MyAppFactory.messageValue();
        }

        return{
            serviceValueMessage: getFactoryMessage
        };
    }]);

myBasicAngularApplicationRoot
    .factory("MyAppFactory", [function () {

    var msg = "Welcome To Application";

    function getMessage() {
        return msg;
    }

    return {
        messageValue: getMessage
    };

}]);