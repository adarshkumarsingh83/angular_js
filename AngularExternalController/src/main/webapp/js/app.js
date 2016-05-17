var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", ["$scope", function ($scope) {
    $scope.applicationMsg = "Welcome to Application"
    $scope.firstName = "Enter ";
    $scope.lastName = "Enter ";
}]);