var application = angular.module('Application', []);

application.controller("ApplicationController", ['$scope', function ($scope) {
    $scope.z = 0;
    $scope.sum = function () {
        $scope.z = $scope.x + $scope.y;
    };

    $scope.subtract = function(){
        $scope.z = $scope.x - $scope.y;
    }

    $scope.multiplication=function(){
        $scope.z = $scope.x * $scope.y;
    }

    $scope.division=function(){
        $scope.z = $scope.x / $scope.y;
    }
}]);