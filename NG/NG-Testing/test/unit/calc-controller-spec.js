/**
 * http://usejsdoc.org/
 */

describe('calc-controller test-suite', function() {

	beforeEach(module('calc'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	var $calcController;
	var $scope;

	beforeEach(function() {
		$scope = {};
		$scope.first = 1;
		$scope.second = 2;
		$calcController = $controller('CalcController', {
			$scope : $scope
		});
	});

	it("shud return 2 on 1+1", function() {
		$scope.doArith();
		expect($scope.latest).toBe(3);
	});

	it("1-2=-1", function() {
		$scope.operator = '-';
		$scope.doArith();
		expect($scope.latest).toBe(-1);
	});

	it("1*2=2", function() {
		$scope.operator = '*';
		$scope.doArith();
		expect($scope.latest).toBe(2);
	});

	it("1/2=1", function() {
		$scope.operator = '/';
		$scope.doArith();
		expect($scope.latest).toBe(0.5);
	});

});