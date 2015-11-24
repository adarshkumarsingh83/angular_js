myAngularApplicationRoot.service("MyApplicationService",["MyApplicationFactory",function(MyApplicationFactory){

    function getMessageFromService(){
        console.log("MyAppService");
        return MyApplicationFactory.messageFactoryValue();
    }

    return{
        messageServiceValue: getMessageFromService
    };
}]);