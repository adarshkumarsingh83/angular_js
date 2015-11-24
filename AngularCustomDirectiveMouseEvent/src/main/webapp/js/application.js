var myBasicAngularApplicationRoot = angular.module("MyBasicAngularApplicationRoot", []);

myBasicAngularApplicationRoot.controller("MyAppController", [ "$scope" , "MyAppService" , function($scope , MyAppService) {
    console.log("MyAppController");
    $scope.applicationMsg = angular.uppercase(MyAppService.messageServiceValue());
}]);

myBasicAngularApplicationRoot.service("MyAppService",["MyAppFactory",function(MyAppFactory){

    function getMessageFromService(){
        console.log("MyAppService");
        return MyAppFactory.messageFactoryValue();
    }

    return{
       messageServiceValue: getMessageFromService
    };
}]);

myBasicAngularApplicationRoot.factory("MyAppFactory" , [ function(){

    var messageVar = "Welcome To Application";

    function getMessageFromFactory() {
        console.log("MyAppFactory");
        return messageVar;
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);

myBasicAngularApplicationRoot.directive("myCustomDirective",function(){

    return{
        restrict:'E',
        transclude: true,
        link: function(scope,element,attibute){
            console.log(scope);
            console.log(element);
            console.log(attibute);
        }
    };
});

myBasicAngularApplicationRoot.directive("myMouseEventDirective",function(){

     return{
        restrict:'A',
        link: function(scope,element,attribute){
                element.bind("mouseenter",function(){
                    element[0].innerText="Mouse Enter";
                });
                element.bind("mouseleave",function(){
                   element[0].innerText="Mouse Leave";
                });
        }
     };
});