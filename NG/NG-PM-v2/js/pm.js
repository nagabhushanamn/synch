/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('pm', [ 'ui.router', 'lbServices' ]);

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
			url : "/",
			templateUrl : "templates/pm-home.html"
		})
		.state('all', {
			url : "/view-all",
			templateUrl : "templates/pm-grid.html",
			controller: "ViewAllController",
			resolve:{
				"someThing":function(){
					//......
					return "nothing";
				}
			}
		})
		.state('new', {
			url : "/add-new",
			templateUrl : "templates/pm-product-form.html",
			controller: "AddController"
		})
		.state('all.edit', {
			url : "/edit-product/:prodId",
			views:{
				"read":{
					templateUrl : "templates/pm-product-view.html",
					controller: "ViewAndUpdateController"
				},
				"edit":{
					templateUrl : "templates/pm-product-form.html",
					controller: "ViewAndUpdateController"
				}
			}
		})
		.state('all.view', {
			url : "/view-product/:prodId",
			views:{
				"read":{
					templateUrl : "templates/pm-product-view.html",
					controller: "ViewAndUpdateController"
				}
			}
		});



	});

	
	
	app.controller('ViewAndUpdateController', function($scope, Product, $state,
			$stateParams, $location) {

		var product = Product.findById({
			id : $stateParams.prodId
		});
		$scope.product = product;

		$scope.save = function() {
			Product.upsert($scope.product);
			// $location.path('view-all');
			$state.go('all');
		};

	});

	app.controller('ViewAllController', function($scope, $state, Product,someThing) {

		console.log(someThing);
		
		$scope.products = Product.find();

		$scope.remove = function(id) {
			Product.deleteById({
				id : id
			});
			$state.reload(); // bug..
		};

	});

	app.controller('AddController', function($scope, $location, Product) {
		// Load all products
		$scope.product = {};
		$scope.save = function() {
			$scope.product.make = Date.now();
			Product.create($scope.product);
			$location.path('view-all');
		};
	});

})();
