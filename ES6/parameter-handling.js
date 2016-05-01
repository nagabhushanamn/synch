/**
 * http://usejsdoc.org/
 */

// ES-5
function add(a, b) {
	if (a === undefined) {
		a = 0;
	}
	if (b === undefined) {
		b = 0;
	}
	var r = a + b;
	return r;
}

console.log(add(1, 2));

// Es-6

// function sum(a=0,b=0){
// var r = a + b;
// return r;
// }
//
// console.log(sum());


//---------------------------------

//
//function f(a,...rest){
//	console.log(a);
//	console.log(rest);
//}
//
//f(12);
//

//----------------------------------

// spread operator

//var arr=["hello","you",100];
//var newArray=[1,...arr];
//


//var name='Nag';
//var v=[...name];


//----------------------------------


















