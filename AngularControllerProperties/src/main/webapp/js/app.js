var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", ["$scope", function ($scope) {

    $scope.applicationMsg = "Welcome to Application"

    $scope.person = {
        firstName: "Adarsh",
        lastName: "Kumar"
    };

    $scope.fullName = function() {
        var x = $scope.person;
        return x.firstName + " " + x.lastName;
    }

}]);