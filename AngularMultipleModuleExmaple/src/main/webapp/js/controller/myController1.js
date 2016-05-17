/**
 * Created by Adarsh on 7/24/15.
 */
myBasicAngularApplicationRoot1.controller("MyAppController1", [ "$scope" , "MyAppService1" , function($scope , MyAppService1) {
    console.log("MyAppController1");
    $scope.applicationMsg1 = angular.uppercase(MyAppService1.messageServiceValue());
}]);
