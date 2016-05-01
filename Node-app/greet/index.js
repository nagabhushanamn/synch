/**
 * http://usejsdoc.org/
 */

var enGreet = require('./en-greet');
var esGreet = require('./es-greet');

function greet(lang) {
	if (lang === 'en') {
		enGreet();
	}
	if (lang === 'es') {
		esGreet();
	}
}

module.exports = greet;