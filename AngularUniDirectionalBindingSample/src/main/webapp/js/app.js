var myBasicAngularApplicationRoot= angular.module("MyBasicAngularApplicationRoot", []);

 myBasicAngularApplicationRoot .controller("MyAppController", ["$scope", function ($scope) {
    $scope.angularMsgModelObject = "Welcome from Angular";
}]);