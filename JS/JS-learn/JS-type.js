// 1. simple types

// a.string

// var name='Nag';
// console.log(typeof name);

//----------------------------

// b. number

// var count=10;
// var cost=12.12;

//----------------------------

// c. boolean

// var found=true;

//-----------------------------

// d. undefined

// var v;
// console.log(typeof v);

//-----------------------------

// e. null

// var o=null;
// console.log(typeof o);

//------------------------------

// var v=null;
// console.log(v===null);

//------------------------------

// 2. Reference Types

/*

 Reference Type --> objects

 object ==> collection of name:value pair about an entity

 e.g

 person

 name:'Nag'
 age : 32
 doWork:function(){}


 how to create obj in JS lang ?

 syntax:

 new ConstructoFunction()

 e,g

 Object
 Array
 Date

 Person


 */

// var person=new Object();
// person.name='Nag';
// person.age=32;
// person.doWork=function(){
//     console.log('teaching JS');
// };
// console.log(person.name);
// person.doWork();
// delete person.name;
// console.log(person.name);
//------------------------------------------------------------------
// how to assign/access js-obj properties ?
/*

  2- ways
  
  when property is qualified use '.' notation else use '[]' notation

 */

//  var person=new Object();
//  person.name='Nag';
//  person['full-name']="Naga N";
//  console.log(person.name);
//  console.log(person['name']);
//  console.log(person['full-name']);

//--------------------------------------------------------------------
/*

 JS built-in types

 Object
 Array
 RegExp
 Function


 */

// a. Object
// var person=new Object();
// person.name='Nag';
// person.age=32;
// person.doWork=function() {};
//  // or 'literal' style
//  var person={
//      name:'Nag',
//      age:32,
//      doWork:function(){}
//  };
//----------------------------
// b. Array
//  var colors=new Array();
//  colors.push('red');
//  colors[1]="green";
//  colors.push('blue');
//   // or 'literal' style
//  var colors=["red","green","blue"];

//----------------------------

// d. RegExp
// var re=new RegExp("\\d");
// console.log(re.test("1234567890"));
// // or 'literal' style
// var re=/\d/;
// console.log(re.test("1234567890"));

//----------------------------

// Function

//var add = new Function("n1", "n2", "var result=n1+n2;return result;");
//console.log(add(12, 13));
//
//// or 'literal' style
//
//function sum(n1, n2) {
//	var result = n1 + n2;
//	return result;
//}
//console.log(sum(12, 13));

// --------------------------------
