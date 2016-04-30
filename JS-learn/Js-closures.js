/**
 * http://usejsdoc.org/
 */

function tng() {

	console.log('tng.....');

	var notes = "JS notes";

	function learn() {
		console.log(this.name + ' learning with ' + notes);
	}

	console.log('tng.....finished..');

	return learn;
}

var learnFunc = tng();

var emp1 = {
	name : 'A'
};
var emp2 = {
	name : 'B'
};

learnFunc.call(emp1);
