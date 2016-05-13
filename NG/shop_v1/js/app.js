/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// ----------------------------------------------
	// Model ( data ) ( shud loaded from server/local-storage )
	var items = [ {
		name : 'Laptop',
		price : 198000, // number
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 1000,
		images:[{full:'images/Laptop.png',thumb:''},{full:'',thumb:''}]
	}, {
		name : 'Mobile',
		price : 9000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount : 500,
		images:[{full:'images/Mobile.png',thumb:''},{full:'',thumb:''}]
	} ];
	// ----------------------------------------------

	// Using DOM ( plain JS )

	// document.querySelector('h4').innerHTML = item.name;
	// document.querySelector('h5').innerHTML = item.price;
	// document.querySelector('p').innerHTML = item.desc;

	// ----------------------------------------------

	// using jQuery

	// $(function(){
	// $('h4').text(item.name);
	// $('h5').text(item.price);
	// $('p').text(item.desc);
	// })

	// ----------------------------------------------

	// Controller
	storeModule.controller('StoreController', function($scope, $filter) {
		// this.product=item;
		// $scope.product = item; // ViewModel
		$scope.products = items; // ViewModel

		console.log($filter('uppercase')(items[0].desc));
		console.log($filter('priceDiscount')(1000, 100));

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