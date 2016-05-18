application.service("ApplicationService", ['$http', function ($http) {
    return{
        getData: function (callback) {
             $http.get('/api/get/all').then(function (response) {
                 console.log('get all data Response ' + response);
                 callback(response);
             }, function (reason) {
                 console.log('get all data Reason ' + reason);
                 $rootScope.message = "Unable to Fetch User With Id " + userId;
                 callback(reason);
             });
        }
    }
}])
