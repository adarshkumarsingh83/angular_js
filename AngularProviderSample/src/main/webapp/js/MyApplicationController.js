myAngularApplicationRoot.controller("MyApplicationController"
    , [ "$scope" , "MyApplicationService" , function($scope , MyApplicationService) {
    console.log("MyAppController");
    $scope.applicationMsg = angular.uppercase(MyApplicationService.messageServiceValue());
}]);