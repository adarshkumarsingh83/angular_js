
describe("Angular Jasmin Unit Test Sample Example", function () {

    beforeEach(module('MyBasicAngularApplicationRoot'));

    var scope;
    var myAppController;
    var myAppService;
    var myAppFactory;


    beforeEach(inject(function ($rootScope, $controller,_MyAppService_,_MyAppFactory_) {

        scope = $rootScope.$new();

        myAppController = $controller('MyAppController', {
            $scope: scope
        });

         myAppService = _MyAppService_;
         myAppFactory = _MyAppFactory_;

    }));

    it('Application Controller Unit Test', function () {
        console.log(scope.applicationMsg);
        expect(scope.applicationMsg).toEqual("WELCOME TO APPLICATION");
    });

    it('Application Service Unit Test', function () {
        console.log(myAppService.messageServiceValue);
        expect(myAppService.messageServiceValue).toBeDefined();
        expect(myAppService.messageServiceValue()).toBe("Welcome To Application");
    });

    it('Application Factory Unit Test', function () {
        console.log(myAppFactory.messageFactoryValue);
        expect(myAppFactory.messageFactoryValue).toBeDefined();
        expect(myAppFactory.messageFactoryValue()).toBe("Welcome To Application");
    });

});
