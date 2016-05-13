/**
 * http://usejsdoc.org/
 */
//
// var person = {
// name : 'Nag'
// };
//
// if (person.name) {
// console.log('name property exist...');
// }
/*
 * in JS , falsy values
 * 
 * false null undefined 0 ""
 * 
 */

// var prop="name";
//
// if(prop in person){
// console.log('name property exist...');
// }
//
//	
//	
// ---------------------------------------
// var person={
// name:'Nag',
// age:32
// };
//
// for(var prop in person){
// if(person.hasOwnProperty(prop)){
// console.log(prop +" : "+person[prop]);
// }
// }

// ---------------------------------------
"use strict";

//var person = {
//	name : 'Nag',
//	age : 32
//};

// Object.defineProperty(person, 'name', {configurable:false,writable:false});
// delete person.name;
// person.name="";

// Object.preventExtensions(person);
// person.newProp="val";

// Object.seal(person);
//Object.freeze(person);
//
//console.log(person.name);

//--------------------------------------------


/*
 *  js - obj can have 2 types of properties
 *  
 *  a. data property
 *  b. accessor property
 * 
 */

//var person={
//		_name:'Nag',  // data property
//		set name(newName){
//			console.log('set...');
//			if(newName){
//				this._name=newName;
//			}
//		},
//		get name(){
//			console.log('get...');
//			return this._name;
//		}
//};
//
//
//
//person.name="New Nag";  // write
//console.log(person.name); // read
//


//--------------------------------------------











