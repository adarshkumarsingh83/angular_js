angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot")
    .controller("MyAppController", ["$scope"
        , function ($scope) {
            $scope.angularMsg = "Welcome to Angular ";
        }
    ]);


angular.module("MyBasicAngularApplicationRoot")
    .directive("myDirective", [ function () {
        return {
            restrict: 'E',
            scope: {
                title: '=myData'
            }, templateUrl: 'template/myTemplate.html'
        };
    }]);