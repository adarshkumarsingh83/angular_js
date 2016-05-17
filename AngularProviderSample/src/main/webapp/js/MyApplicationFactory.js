myAngularApplicationRoot.factory("MyApplicationFactory" , [ "MyApplicationProvider",function(MyApplicationProvider){

    function getMessageFromFactory() {
        console.log("MyAppFactory");
        return MyApplicationProvider.messageProviderValue();
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);
