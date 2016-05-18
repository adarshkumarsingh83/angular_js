'use strict';

/**
 * Services related to localstorage object.
 */
application.factory('LocalStoreService', ['$window', '$rootScope', '$log', '$timeout',
function($window, rootScope, log, timeout) {
	/**
	 * Global Vars
	 */
	var storage = ( typeof $window.localStorage === 'undefined') ? undefined : $window.localStorage;
	if (storage) {
		rootScope.noLocalStorage = false;
		//private util methods for adding, retrive, and remove items.
		var utils = {
			parseItem : function(res) {
				return res != 'undefined' ? angular.fromJson(res) : '';
			},
			set : function(storeName, value) {
				var saver = angular.toJson(value);
				storage.setItem(storeName, saver);
			},
			get : function(store) {
				var item = storage.getItem(store);
				return utils.parseItem(item);
			},
			remove : function(store) {
				storage.removeItem(store);
				return true;
			}
		};

		//accessible members from controllers
		var offlineStore = {
			addLSItem : function($scope, storeName, props) {
				utils.set(storeName, props);
			},
			getLSItem : function(store) {
				return utils.get(store);
			},
			removeLSItem : function(store) {
				return utils.remove(store);
			},
			clearAll : function() {
				storage.clear();
			},
			clearUserItems : function(name) {
				// This is a place holder for future logic. When logging out,
				// only user specific items should be removed from Local Storage.
				// However a definitive list of such items is currently unknown
				// so for now we will continue to clear everything.
				console.log('***LocalStorageService - clearing local storage');
				storage.clear();
			}
		};
		return offlineStore;
	} else {
		rootScope.noLocalStorage = true;
	};
}]);
