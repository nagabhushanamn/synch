/**
 * http://usejsdoc.org/
 */

// ES-5

/*
 * global-scope & function-scope
 * 
 */

//function f() {
//
//	{
//		var i = 100;
//	}
//
//	console.log(i);
//
//}
//
//f();


// ES6

// block scope

"use strict";

function f() {

	{
		let i = 100;
	}

	console.log(i);

}

f();












