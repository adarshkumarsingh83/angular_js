/**
 * Created by Adarsh on 12/7/15.
 */
application.controller('LoginController', ['$scope','$state', function ($scope,$state) {

    $scope.loginSubmit = function () {
        var username = $scope.username;
        var password = $scope.password;
        if(username == password){
            $state.go('home.homeContent', {
                location: true
            });
        }else{
            $state.go('indexpage', {
                location: false
            });
        }
    }
}]);