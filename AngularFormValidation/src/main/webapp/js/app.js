var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", ["$scope", function ($scope) {
    $scope.applicationMsg = "Welcome to Application"
   // $scope.firstName = "Adarsh ";
   // $scope.lastName = "Kumar ";
   // $scope.email = "adarshkumar@gmail.com"
}]);