/**
 * http://usejsdoc.org/
 */

/*
 * 2 ways , to create/define function
 * 
 * a. declaration b. expression
 * 
 */

// func declaration

// console.log(add(12, 13));
//
// function add(n1, n2) {
// return n1 + n2;
// }
// console.log(add(12,13));

// --------------------------------
// func expression

// console.log(add(12,13));
// var add=function(n1,n2){return n1+n2;};
// console.log(add(12,13));

// --------------------------------

// functions as values

// function sayHello(){
// console.log('hello');
// }
//
// var sayHi=sayHello;
//
// sayHi();
// --------------------------------

// function as arguments
//
// function greet(f){
// if(f){
// f();
// return;
// }
// console.log('Hello');
// }
//
// greet();
// greet(function(){console.log('ola..');});
//
//
// //e.g
//
// var arr=[1,3,5,7,9,2,4,6,8,10];
// //arr.sort();
// arr.sort(function(a, b) {
// return a-b;
// });
// console.log(arr);

// --------------------------------
// function as returns

// function tng(){
// console.log('teaching Js....');
// function learn(){
// console.log('learn Js..');
// }
// return learn;
// }
//
// var learnFunc=tng();
//
// learnFunc();
// learnFunc();

// ---------------------------------------------

// JS lang has 'hoisting' as default feature.

/*
 * lifting-up var dec to top of execution-context
 * 
 */

// -------------------------------------------

//var v = 100;
//
//function f() {
//	var v;
//	console.log(v);
//	v = 200;
//}
//
//f();

//----------------------------------------------

//
//function reflect(a,b,c){
//	console.dir(arguments);
//	return arguments['0'];
//}
//
//console.log(reflect(12,13,14));



//e.g

//function sum(){
//	var r=0,
//	    i=0,
//	    len=arguments.length;
//	while(i<len){
//		r=r+arguments[i];
//		i++;
//	}
//	return r;
//}
//
//
//console.log(sum(1,2,3));



//----------------------------------------------


// 'this' keyword


// why we need 'this' keyword ?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
//
////person.sayName();
//
//var p=person;
//person={name:'Ria'};
//
//
//p.sayName();



//----------------------------------------------

//global.name='GLOBAL';
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//
////var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
////var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//sayNameForAll(); // im GLOBAL  // function invocation pattern  ( this --> global )
//p1.sayName();  // im Nag       // method invocation pattern   ( this --> invoker-obj )
//p2.sayName();  // im Ria


//-----------------------------------------------

//var p1={name:'Nag'};
//var p2={name:'Ria'};
//
//
//
//var util={
//		sayName:function(message,from){
//			console.log(message+' im '+this.name+" "+from);
//		}
//};


// dynamic method/function-binding

//util.sayName();

// eager invocation

//util.sayName.call(p1,"Hello","CHN");
//util.sayName.call(p2,"Hi","BLR");
//
//// or
//
//util.sayName.apply(p1,["Hello","CHN"]);
//util.sayName.apply(p2,["Hi","BLR"]);

// lazy invocation

//var p1SayNameFunc=util.sayName.bind(p1,"Hello","CHN");

// 'greet-event' on p1
//p1SayNameFunc();


//-----------------------------------------------


//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}
//
//var p1=new Person('Nag',32);  // constructor invocation  ( this --> new-obj )
//var p2=new Person('Ria',1);
//


//-----------------------------------------------


/*
 *  in JS , can invoke func in 4 ways
 *  
 *  --> as function        ( this --> global-obj  )
 *  --> as method          ( this --> invoker-obj )
 *  --> as dynamic binding ( this --> arg-obj )
 *  --> as constructor     ( this --> new-obj )
 * 
 * 
 */

//-----------------------------------------------






