/**
 * http://usejsdoc.org/
 */


//var arr=[1,3,2];
////arr.sort(function(a,b){return a-b});
//arr.sort((a,b)=>{return a-b});
//console.log(arr);

//e,g

function Person(name, age) {
	this.name = name;
	this.age = age;
	var self = this;
	//	setInterval(function() {
	//		self.age++;
	//		console.log(self.name + " -> " + self.age);
	//	}, 1000);
	
	setInterval(()=>{this.age++;console.log(this.age)},1000);
}

var p = new Person('ria', 1);
