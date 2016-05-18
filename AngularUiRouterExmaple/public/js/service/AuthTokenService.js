'use strict';

// This is the service responsible for storing Authenticated Information
//var authenticatedInfo = {
//	sessionToken : 'amFjayEhITE0MDU2NjA5MzI0ODAhISGuTTHMZnmpVYqWVJ/0Ru2G',
//	userName : 'jack'
//};
//it will be set from SessionService on /authenticate post call.

application.factory('AuthTokenService', ['LocalStoreService', function(LocalStoreService) {
    return {
        setAuthToken: function (token) {
            if (token) {
                LocalStoreService.addLSItem(null, 'AuthToken', token);
            }
        },
        getAuthToken: function () {
            var authToken = LocalStoreService.getLSItem('AuthToken');
            if (!authToken) authToken = {};
            return authToken;
        }
    };
}]);