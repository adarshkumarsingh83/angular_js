angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot")
    .controller("MyAppController", ["$scope", "MyAppService"

        , function ($scope, MyAppService) {
            $scope.angularMsg = MyAppService.serviceValueMessage();

            $scope.$watch("angularMsgText", function (newVal) {
                if (newVal) {
                    $scope.angularMsg = newVal;
                }
            });
        }]);

angular.module("MyBasicAngularApplicationRoot")
    .service("MyAppService", [ "MyAppFactory", function (MyAppFactory) {

        function getFactoryMessage() {
            return MyAppFactory.messageValue();
        }

        return{
            serviceValueMessage: getFactoryMessage
        };
    }]);

angular.module("MyBasicAngularApplicationRoot")
    .factory("MyAppFactory", [

        function () {
            var msg = "Message from My factory";

            function getMessage() {
                return msg;
            }

            return {
                messageValue: getMessage
            };
        }
    ]);