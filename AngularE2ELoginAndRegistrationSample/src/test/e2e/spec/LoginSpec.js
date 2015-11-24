var applicationUtils = require('../utils/applicationUtils.js');

describe("Application Functionality Check", function () {

    var userName = "adarsh";
    var userPwd = "radha";

    it('Getting Web Page ', function () {
        browser.get('');
    });

    it('Login Check Without Registration', function () {
        applicationUtils.login(userName, userPwd);
        expect(element(by.css('.alert-danger')).getText()).toBe('Username or password is incorrect');
        element(by.css('.btn-link')).click();
    });

    it('Registration Check ', function () {
        applicationUtils.registration(userName, "kumar", userName, userPwd);
        expect(element(by.css('.alert')).getText()).toBe('Registration successful');
    });

    it('Login Check After Registration', function () {
        applicationUtils.login(userName, userPwd);
        expect(element(by.id('home')).isPresent()).toBeTruthy();
    });

    it('Deletion of the User', function () {
        element.all(by.repeater('user in vm.allUsers')).then(function (aLink) {
            for (var i = 0; i < aLink.length; i++) {
                if (aLink[i].getAttribute('name') === userName) {
                    aLink[i].click();
                    expect("vm.deleteUser").toHaveBeenCalled();
                }
            }
        });
    });

    it('Logout Check After Login', function () {
        element(by.css('.btn-primary')).click();
        expect(element(by.css('.col-md-offset-3')).isPresent()).toBeTruthy();
    });

});