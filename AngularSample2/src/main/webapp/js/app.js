angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot").controller("MyAppController", ["$scope", "MyAppFactory"
    , function ($scope, MyAppFactory) {
        $scope.angularMsg = MyAppFactory.messageValue();
    }]);


angular.module("MyBasicAngularApplicationRoot").factory("MyAppFactory", [function () {

    var msg = "Message from My factory";

    function getMessage() {
        return msg;
    }

    return {
        messageValue: getMessage
    };

}]);