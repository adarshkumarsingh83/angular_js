angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot")
    .controller("MyAppController", ["$scope", function ($scope) {
    $scope.angularMsg = "Welcome from Angular";
}]);