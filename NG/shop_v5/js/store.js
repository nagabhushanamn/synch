/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', ['store-service']);

	// ----------------------------------------------

	// Controller

	storeModule.controller('StoreController', function($scope, $filter,storeSerice) {
		var promise = storeSerice.loadAll();
		promise.then(function(items) {
			$scope.products = items;
		}, function(reason) {
			$scope.message = reason.statusText;
		});
	});

	storeModule.controller('TabsController', function($scope) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex) {
			$scope.tab = tabIndex;
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
		};
	});

	// ----------------------------------------------

	storeModule.filter('priceDiscount', function($filter) {
		return function(originalPrice, discount) {
			if (angular.isNumber(originalPrice)) {
				if (!discount) {
					return originalPrice - 1;
				} else {
					return originalPrice - discount;
				}
			} else {
				return originalPrice;
			}
		};
	});

	// ----------------------------------------------

	storeModule.directive('productTitle', function() {
		return {
			restrict : "E",
			replace : true,
			templateUrl : "templates/product-title.html",
			link : function(scope, element, attrs) {
				console.log('link func..');
				element.on('mouseenter', function(e) {
					element.css('background-color', '#def');
				});
				element.on('mouseleave', function(e) {
					element.css('background-color', '#fff');
				});
			}
		};
	});
	storeModule.directive('productTabs', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-tabs.html",
			controller : 'TabsController',
			controllerAs : "tc"
		};
	});
	storeModule.directive('productReviewForm', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				}; // authenticated-user
				$scope.addNewReview = function(product) {
					// send newReview with product reference to server.
					product.reviews.push($scope.newReview);
					$scope.newReview = {
						author : 'nag@gmail.com'
					}; // reset
				};
			}
		};
	});

	// --------------------------------------------------------------

})();