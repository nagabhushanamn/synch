/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log('im ' + this.name);
	};
}

Person('Abc', 120);