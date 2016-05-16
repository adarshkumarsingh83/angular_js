var myBasicAngularApplicationRoot= angular.module("MyBasicAngularApplicationRoot", []);

 myBasicAngularApplicationRoot .controller("MyAppController", ["$scope", "MyAppFactory", function ($scope, MyAppFactory){
    $scope.angularMsg = MyAppFactory.messageValue();
    $scope.firstName = "Enter ";
    $scope.lastName = "Enter ";
}]);

myBasicAngularApplicationRoot .factory("MyAppFactory", [function () {

    var msg = "Welcome To Application";

    function getMessage() {
        return msg;
    }

    return {
        messageValue: getMessage
    };

}]);