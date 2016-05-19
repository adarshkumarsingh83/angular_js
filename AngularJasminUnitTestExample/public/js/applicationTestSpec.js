describe('ApplicationTest', function () {

    beforeEach(angular.mock.module('Application'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('Application Controller Sum Testing', function () {
        it('1 + 2 should equal 3', function () {
            var $scope = {};
            var controller = $controller('ApplicationController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });
    });

    describe('Application Controller Subtraction Testing', function () {
        it('5 subtract 3 equal 2', function () {
            var $scope = {};
            var controller = $controller('ApplicationController', { $scope: $scope });
            $scope.x = 5;
            $scope.y = 3;
            $scope.subtract();
            expect($scope.z).toBe(2);
        });
    });

    describe('Application Controller Multiplication Testing', function () {
        it('2 multiply by 3 equal 6', function () {
            var $scope = {};
            var controller = $controller('ApplicationController', { $scope: $scope });
            $scope.x = 2;
            $scope.y = 3;
            $scope.multiplication();
            expect($scope.z).toBe(6);
        });
    });

    describe('Application Controller Division Testing', function () {
        it('10 Divided by 5 equal 2', function () {
            var $scope = {};
            var controller = $controller('ApplicationController', { $scope: $scope });
            $scope.x = 10;
            $scope.y = 2;
            $scope.division();
            expect($scope.z).toBe(5);
        });
    });

});