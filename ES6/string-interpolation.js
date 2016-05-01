/**
 * http://usejsdoc.org/
 */


var trainer={
		name:'Nag',
		sub :'JS'
};

//// es-5
//var temp="The trainer "+trainer.name+" teaching "+trainer.sub;
//console.log(temp);

// es-6
var tempMessage=`The trainer ${trainer.name} teaching ${trainer.sub}`;
console.log(tempMessage);