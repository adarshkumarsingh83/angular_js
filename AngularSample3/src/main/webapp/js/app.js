angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot").controller("MyAppController", ["$scope", "MyAppFactory"
    , function ($scope, MyAppFactory) {

        $scope.angularMsg = MyAppFactory.messageValue();

        MyAppFactory.employeeList().success(function (data) {
            $scope.employeeList = data;
            console.log(data);
        });

    }]);


angular.module("MyBasicAngularApplicationRoot").factory("MyAppFactory", ["$http", function ($http) {

    var msg = "Message from My factory";

    function getMessage() {
        return msg;
    }

    function getEmployees() {
        return $http.get("data/employee.json");
    }

    return {
        messageValue: getMessage, employeeList: getEmployees
    };

}]);