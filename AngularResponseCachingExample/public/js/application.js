var application = angular.module("Application", []);

application.controller('ApplicationController', [ '$scope','$q', 'ApplicationCatchService', function ($scope, $q, ApplicationCatchService) {
     $scope.msg="welcome to cache application";
    $scope.getResponse = function (cache,val) {
        return getData(cache, function (response) {
            console.log('value of cache in controller ' + response);
            $scope["value"+val] = response;
        });
    }
    function getData(cache, callback) {
        console.log('value of cache in controller getData ' + cache);
        ApplicationCatchService.getResponse(cache).then(function (response) {
            console.log('Response ' + response);
            callback(response);
        }, function (reason) {
            console.log('Exception Reason ' + reason);
            callback(reason);
        });
    }

}]);

/**
 * service catching the promise locally and returning the promise to the caller its only one call
 */
application.service('ApplicationCatchService', ['$http', '$q', function ($http, $q) {
    var responseLocalCacheStore;

    function getResponse(cache) {
        var promiseResponse = $q.defer();
        if (responseLocalCacheStore && cache) {
            console.log('value of cache service ' + cache);
            promiseResponse.resolve(responseLocalCacheStore);
        } else {
            console.log('value of cache service ' + cache);
            $http({method: 'GET', url: '/api/data'})
                .then(function success(response) {
                    responseLocalCacheStore = response.data;
                    promiseResponse.resolve(responseLocalCacheStore);
                }, function failure(reason) {
                    promiseResponse.reject(reason);
                });
        }
        return promiseResponse.promise;
    }

    function clearResponseLocalCacheStore() {
        responseLocalCacheStore = null;
    }

    return {
        getResponse: getResponse,
        clearResponseLocalCacheStore: clearResponseLocalCacheStore
    };
}]);

