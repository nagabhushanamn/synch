/**
 * http://usejsdoc.org/
 */

(function() {

	var storeServiceModule = angular.module('store-service', []);

	// services

	storeServiceModule.factory('storeSerice', function($http, $q) {

		var url = 'http://0.0.0.0:3000/api/products';

		var service = {
			loadAll : function() {
				var defer = $q.defer();
				var promise = $http.get(url); // aynch call
				promise.then(function(resp) {
					defer.resolve(resp.data)
				}, function(reason) {
					defer.reject(reason);
				});
				return defer.promise;
			}
		};

		return service;

	});
})();