/**
 * http://usejsdoc.org/
 */

//
// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };
// way-1 : use self executable func
// (function() {
//
// synch.b.doWork() // dependency
//	
// var o = {
// doWork : function() {
// console.log('A work..');
// }
// };
//	
// synch.a=o;
//
// })();

// way-2 :
define('js/a', ['js/b'], function(b) {

	b.doWork();
	
	var o = {
		doWork : function() {
			console.log('A work..');
		}
	};
	
	return o;

});
