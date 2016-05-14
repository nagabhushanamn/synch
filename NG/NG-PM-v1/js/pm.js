/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('pm', [ 'ngRoute', 'lbServices' ]);

	app.config(function($routeProvider) {

		$routeProvider.when('/', {
			templateUrl : "templates/pm-home.html"
		}).when('/view-all', {
			templateUrl : "templates/pm-grid.html",
			controller : "ViewAllController"
		}).when('/add-new', {
			templateUrl : "templates/pm-product-form.html",
			controller : "AddController"
		});

	});

	app.controller('ViewAllController', function($scope,$route,Product) {

		// Load all products

		// pmService.loadAll().then(function(items) {
		// $scope.products = items;
		// });

		$scope.products = Product.find();

		 $scope.remove = function(id) {
			 Product.deleteById({id:id});
			 $route.reload();
		 };

	});

	app.controller('AddController', function($scope, $location, Product) {
		// Load all products
		$scope.product = {};
		$scope.save = function() {
			
			// pmService.save($scope.product).then(function(value) {
			// $location.path('view-all');
			// });

			$scope.product.make = Date.now();
			Product.create($scope.product);
			$location.path('view-all');

		};
	});

	//	
	// app.factory('pmService', function($resource, $q) {
	//
	// var url = "http://localhost:3000/api/products/:prodId";
	//
	// var Product = $resource(url, {
	// prodId : '@id'
	// });
	//
	// var service = {
	// loadAll : function() {
	// var defer = $q.defer();
	// Product.query(function(resp) {
	// defer.resolve(resp);
	// });
	// return defer.promise;
	// },
	// load : function(id) {
	//
	// },
	// save : function(newProduct) {
	// var defer = $q.defer();
	// var product = new Product(); // create resource obj.
	// angular.extend(product, newProduct);
	// product.make = Date.now();
	// product.$save(function(prod) {
	// defer.resolve(prod);
	// });
	// return defer.promise;
	// },
	// update : function(product) {
	//
	// },
	// remove : function(id) {
	//
	// }
	// };
	// return service;
	// });

})();
