/**
 * http://usejsdoc.org/
 */

// function init() {
//
// var count = 0; // private
//
// // public
// return {
// doCount : function() {
// count++;
// },
// getCount : function() {
// return count;
// }
// };
// }
// var counter = init();
// -------------------------------

// IIFE / Self Executable Func
var counter=(function() {

	var count = 0; // private

	// public
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};

})();

// --------------------------

// client

counter.doCount();
counter.doCount();
counter.doCount();

// count = 0; // un-expected

console.log(counter.getCount());
