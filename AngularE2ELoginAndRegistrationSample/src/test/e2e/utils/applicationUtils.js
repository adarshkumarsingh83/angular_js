'use strict';

var applicationUtils = {

    /*
     * Login to Application
     */
    login: function(username, password) {
        element(by.model('vm.username')).sendKeys(username);
        element(by.model('vm.password')).sendKeys(password);
        element(by.css('.btn-primary')).click();
    },

    registration: function(firstName,lastName,userName,userPwd) {
        element(by.model('vm.user.firstName')).sendKeys(firstName);
        element(by.model('vm.user.lastName')).sendKeys(lastName);
        element(by.model('vm.user.username')).sendKeys(userName);
        element(by.model('vm.user.password')).sendKeys(userPwd);
        element(by.css('.btn-primary')).click();
    },

    /*
     * Logout of Application
     */
    logout: function() {
        element(by.id('btn-user-menu')).click();
        element(by.id('btn-logout')).click();
        element(by.id('btn-logout-confirmation')).click();
    }
};

module.exports = applicationUtils;