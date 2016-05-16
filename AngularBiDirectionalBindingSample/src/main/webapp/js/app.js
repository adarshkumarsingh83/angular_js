var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", ["$scope", function ($scope) {
    $scope.firstName = "Enter First Name";
    $scope.lastName = "Enter Last Name";
    $scope.angularMsgModelObject = "Welcome from Angular";
}]);