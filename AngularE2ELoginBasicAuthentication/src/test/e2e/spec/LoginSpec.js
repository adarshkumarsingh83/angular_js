describe("Login Check", function() {

    beforeEach(function() {
        //login
        browser.get('');
        element(by.model('username')).sendKeys("adarsh");
        element(by.model('password')).sendKeys("radha");
        element(by.css('.btn-danger')).click();
    });

    afterEach(function() {
        // logout
        element(by.id('logout')).click();
    });

    it('should run this example security test', function() {
        expect(element(by.id('home')).isPresent()).toBeTruthy();
    });
});