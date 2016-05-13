/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// ----------------------------------------------
	// Model ( data ) ( shud loaded from server/local-storage )
	var items = [ {
		id:1,
		name : 'Laptop',
		price : 198000, // number
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 1000,
		images:[{full:'images/Laptop.png',thumb:''},{full:'',thumb:''}],
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good one'},
		         {stars:2,author:'indu@gmail.com',comment:'too costly..'}
		         ]
	}, {
		id:2,
		name : 'Mobile',
		price : 9000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 500,
		images:[{full:'images/Mobile.png',thumb:''},{full:'',thumb:''}],
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good one'},
		         {stars:2,author:'indu@gmail.com',comment:'too costly..'}
		         ]
	} ];
	
	// ----------------------------------------------

	// Controller
	
	storeModule.controller('StoreController', function($scope, $filter) {
		// this.product=item;
		// $scope.product = item; // ViewModel
		$scope.products = items; // ViewModel

		console.log($filter('uppercase')(items[0].desc));
		console.log($filter('priceDiscount')(1000, 100));

	});
	
	storeModule.controller('TabsController', function($scope) {
		$scope.tab=1;  // ng-init="tab=1" 
		$scope.changeTab=function(tabIndex){
			$scope.tab=tabIndex;
		};
		$scope.isTabSelected=function(tabIndex){
			return $scope.tab===tabIndex;
		};
	});
	
	storeModule.controller('ReviewFormController', function($scope) {
		$scope.newReview={author:'nag@gmail.com'};   // authenticated-user
		$scope.addNewReview=function(product){
			// send newReview with product reference to server.
			product.reviews.push($scope.newReview);
			$scope.newReview={author:'nag@gmail.com'}; // reset
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

})();