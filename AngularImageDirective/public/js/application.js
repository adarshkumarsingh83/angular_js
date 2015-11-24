var imageDirective= angular.module("ImageDirective", []);

imageDirective .controller("DataController", ["$scope","$http", function ($scope, $http) {

     var onSuccess = function(response){
         $scope.person = response.data;
     };

     var onFailure = function(ression){
         $scope.errorMsg = "Unable to find User";
     };

     $http.get('api/users').then(onSuccess,onFailure);

}]);