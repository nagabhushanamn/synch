/**
 * http://usejsdoc.org/
 */

global.name = "GLOBAL";

var trainer = {
	name : 'Nag',
	doTeach : function() {
		console.log(this.name + " teachng JS");
		var that = this;
		function learn() {
			console.log(this.name + ' learning JS from ' + that.name);
		}
		learn();
		var emp = {
			name : 'Sync'
		};
		learn.call(emp);
	}
};

trainer.doTeach();