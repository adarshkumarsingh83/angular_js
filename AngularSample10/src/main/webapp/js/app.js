angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot").controller("MyAppController", ["$http", "$scope", "MyApplicationService"

    , function ($http, $scope, MyApplicationService) {
        $scope.angularMsg = "Welcome to Angular ";

        MyApplicationService.employeeFromService().success(function (data) {
            $scope.employeeList = data;
            console.log(data);
        });

        $scope.postDataToServer = function () {
            var dataObj = {
                "employeeId": $scope.employeeId,
                "employeeName": $scope.employeeName,
                "employeeEmail": $scope.employeeEmail
            };
            var res = $http.post("rest/json/employee/post", dataObj);
            res.success(function (data, status, headers, config) {
                $scope.angularMsg = data;
            });
            res.error(function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({data: data}));
            });
        }

        // http://scotch.io/tutorials/javascript/building-dynamic-angular-forms-with-ngrepeat-and-ngform
        var dataObj = [];
        $scope.addEmployees = function () {
            var currDataObj = {
                "employeeId": $scope.employeeId,
                "employeeName": $scope.employeeName,
                "employeeEmail": $scope.employeeEmail
            };
            dataObj.push(currDataObj);
            $scope.employeeId = "";
            $scope.employeeName = "";
            $scope.employeeEmail = "";
        }

        $scope.onSubmit = function () {
            var res = $http.post("rest/json/employee/postList", dataObj);
            res.success(function (data, status, headers, config) {
                $scope.angularMsg = data;
            });
            res.error(function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({data: data}));
            });
        }
    }

]);


angular.module("MyBasicAngularApplicationRoot")
    .service("MyApplicationService", ["$http", "MyApplicationFactory", function ($http, MyApplicationFactory) {

        function getEmployeesFromService() {
            return MyApplicationFactory.employeeFromFactory();
        }


        return {
            employeeFromService: getEmployeesFromService
        };
    }]);

angular.module("MyBasicAngularApplicationRoot").factory("MyApplicationFactory", ["$http", function ($http) {

    function getEmployeesFromFactory() {
        // return $http.get("rest/json/employee/get");
        return $http({
            type: "GET",
            url: "rest/json/employee/get"
        })
    }

    return {
        employeeFromFactory: getEmployeesFromFactory
    };
}]);