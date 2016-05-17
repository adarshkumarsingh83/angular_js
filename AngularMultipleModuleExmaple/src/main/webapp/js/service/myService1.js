/**
 * Created by Adarsh on 7/24/15.
 */

myBasicAngularApplicationRoot1.service("MyAppService1",["MyAppFactory1",function(MyAppFactory1){

    function getMessageFromService(){
        console.log("MyAppService1");
        return MyAppFactory1.messageFactoryValue();
    }

    return{
        messageServiceValue: getMessageFromService
    };
}]);
