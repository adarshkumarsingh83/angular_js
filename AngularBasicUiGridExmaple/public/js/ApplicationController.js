application.controller('ApplicationController', ['$scope', 'uiGridConstants', 'ApplicationService',
    function ($scope, uiGridConstants, ApplicationService) {
        $scope.message="Welcome to Espark"
        $scope.gridOptions = {
            showGridFooter: true,
            showColumnFooter: true,
            enableFiltering: true
        };
        $scope.Delete = function (row) {
            var index = $scope.gridOptions.data.indexOf(row.entity);
            $scope.gridOptions.data.splice(index, 1);
        };
        var percentage = (100 / 9) + '%';

        $scope.gridOptions.columnDefs = [
            {
                name: 'username',
                field: 'username',
                width: percentage
            },
            {
                name: 'firstName',
                field: 'firstName',
                width: percentage
            },
            {
                name: 'lastName',
                field: 'lastName',
                width: percentage
            },
            {
                name: 'email',
                field: 'email',
                width: percentage
            },
            {
                name: 'phone',
                field: 'phone',
                width: percentage
            },
            {
                name: 'employed',
                field: 'employed',
                width: percentage
            },
            {
                name: 'salary',
                field: 'salary',
                width: percentage,
                aggregationType: uiGridConstants.aggregationTypes.sum
            },
            {
                name: 'age',
                field: 'age',
                width: percentage,
                aggregationType: uiGridConstants.aggregationTypes.min
            },
            {
                name: 'Action',
                cellTemplate: '<button class="btn btn-info" ng-click="grid.appScope.Delete(row)">Delete</button>',
                width: percentage
            }
        ];
        ApplicationService.getData(function (response) {
            if (response) {
                $scope.gridOptions.data = response.data;
            } else {
                $scope.gridOptions.data = null;
            }
        });
    }
]);

