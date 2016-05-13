/**
 * http://usejsdoc.org/
 */

"use strict";

// es-5

// function Person(name, age) {
// this.name = name;
// this.age = age;
// }
// Person.prototype.sayName=function(){
// console.log('im '+this.name);
// };

// es-6

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

//var p1=new Person('Nag',32);
//p1.sayName();


class Employee extends Person{
	constructor(name,age){
		super(name,age);
	}
	sayName(){
		super.sayName();
		console.log('my name is'+this.name);
	}
	doWork(){
		console.log(this.name+" working...");
	}
}

var e=new Employee('Nag',21);
e.sayName();
e.doWork();












