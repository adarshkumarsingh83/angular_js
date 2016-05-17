var application = angular.module("Application", []);

application.controller('ApplicationController', [ '$scope', '$log', 'ApplicationAsyncService', function ($scope, $log, ApplicationAsyncService) {
    $scope.welcome = "welcome to the application ";
    var urlList = [ { url: 'http://localhost:3000/api/data/1' }
                   ,{ url: 'http://localhost:3000/api/data/2' }
                   ,{ url: 'http://localhost:3000/api/data/3' }
                   ,{ url: 'http://localhost:3000/api/data/4' }
                   ,{ url: 'http://localhost:3000/api/data/5' }
                  ];

    $scope.geDataListing = function () {
        ApplicationAsyncService.loadDataFromUrls(urlList).then(
            function (payload) {
                console.log("Response " + payload);
                $scope.list = JSON.parse(payload);
            },
            function (errorPayload) {
                $log.error('failure loading data', errorPayload);
            });
    };

}]);

/**
 * service returning the promises list to the caller and making multiple parallel calls
 * accept array of url
 [
 { url: '/api/data/1' },
 { url: '/api/data/2' },
 { url: '/api/data/3' },
 { url: '/api/data/4' },
 { url: '/api/data/5' }
 ]
 * and return
 [
 promise1_result_payload,
 promise2_result_payload,
 promise3_result_payload
 ]
 */
application.service('ApplicationAsyncService', ['$http', '$q', function ($http, $q) {
    return {
        loadDataFromUrls: function (urls) {
            console.log("loadDataFromUrl() started");
            var deferred = $q.defer();
            var urlCalls = [];
            angular.forEach(urls, function (url) {
                console.log("url"+url.url);
                urlCalls.push($http.get(url.url));
            });
            console.log("loadDataFromUrl() Url calls " + urlCalls);
            $q.all(urlCalls).then(
                function (results) {
                    console.log(JSON.stringify(results));
                    deferred.resolve(JSON.stringify(results));
                },
                function (errors) {
                    deferred.reject(errors);
                },
                function (updates) {
                    deferred.update(updates);
                });
            return deferred.promise;
        }
    };
}]);