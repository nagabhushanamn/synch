/**
 * http://usejsdoc.org/
 */

// --------------------------------------
// pizza-shop
// --------------------------------------
var pizzaShop = {
	getPizza : function() {
		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				//resolve('PIZZZZZAAAA');
				reject('SORRRRYYY');
			}, 5000);

		});
		return promise;
	}
};

// --------------------------------------
// customer ( trainer )
// --------------------------------------

var trainer = {
	doTng : function() {
		console.log('teaching....');
		console.log('hungry..');
		console.log('requesting pizza..');
		var promise = pizzaShop.getPizza();
		promise.then(function(value) {
			console.log("yummy with " + value);
		}, function(reason) {
			console.log("oops " + reason);
		});
		console.log('teaching.... again.. and finishing..');
	}
};

trainer.doTng();
