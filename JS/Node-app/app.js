/**
 * http://usejsdoc.org/
 */

// var hello = require('./hello');
// hello();

var person1 = require('./package1/person');
person1.name = 'Nag';
person1.greet();

//------------------------

var person2 = require('./package1/person');
person2.greet();
