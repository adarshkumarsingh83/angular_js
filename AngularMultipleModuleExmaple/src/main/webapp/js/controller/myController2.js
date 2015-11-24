/**
 * Created by Adarsh on 7/24/15.
 */

myBasicAngularApplicationRoot2.controller("MyAppController2", [ "$scope" , "MyAppService2" , function($scope , MyAppService2) {
    console.log("MyAppController2");
    $scope.applicationMsg2 = angular.uppercase(MyAppService2.messageServiceValue());
}]);
