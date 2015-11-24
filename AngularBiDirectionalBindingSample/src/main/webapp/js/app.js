var myBasicAngularApplicationRoot= angular.module("MyBasicAngularApplicationRoot", []);

 myBasicAngularApplicationRoot .controller("MyAppController", ["$scope", function ($scope) {
    $scope.firstName = "Enter ";
    $scope.lastName = "Enter ";
}]);