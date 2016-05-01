/**
 * http://usejsdoc.org/
 */

function Person(name) {
	this.name = name;
	this.greet = function() {
		console.log(this.name + " Hello");
	};
}

var person = new Person("");

module.exports = person;