var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", ["$scope", "MyAppFactory", function ($scope, MyAppFactory) {
    MyAppFactory.getJsonData().success(function (jsonData) {
        $scope.angularJsonData = jsonData;
    }).error(function (data, status, headers, config) {
            console.log("inside controller function error");
    });
}]);

myBasicAngularApplicationRoot.factory("MyAppFactory", ['$http', function ($http) {

    return {
        getJsonData: function () {
            console.log("inside getJsonData function");
            return $http.get("dataStore/personList.json");
        }
    };
}]);