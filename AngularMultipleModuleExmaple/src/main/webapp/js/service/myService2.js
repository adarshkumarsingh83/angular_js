/**
 * Created by Adarsh on 7/24/15.
 */

myBasicAngularApplicationRoot2.service("MyAppService2",["MyAppFactory2",function(MyAppFactory2){

    function getMessageFromService(){
        console.log("MyAppService2");
        return MyAppFactory2.messageFactoryValue();
    }

    return{
        messageServiceValue: getMessageFromService
    };
}]);