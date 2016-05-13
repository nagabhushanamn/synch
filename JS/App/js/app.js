/**
 * http://usejsdoc.org/
 */
//
// document.addEventListener('DOMContentLoaded', function() {
//
// console.log('DOM ready');
//
// var box = document.querySelector('.jumbotron');
// var hideBtn = document.querySelector('.btn-danger');
// var showBtn = document.querySelector('.btn-success');
//
// hideBtn.addEventListener('click', function(e) {
// box.style.display = 'none';
// });
// showBtn.addEventListener('click', function(e) {
// box.style.display = 'block';
// });
//	
// //--------------------------------------------------
//	
// var trainer={
// tnrName:'Nag',
// doTeach:function(e){
// console.log(this.tnrName +" teaching JS");
// }
// };
//	
//	
// var teachBtn=document.querySelector('#teach');
// // teachBtn.addEventListener('click',function(){
// // trainer.doTeach();
// // });
//	
// teachBtn.addEventListener('click',trainer.doTeach.bind(trainer));
//	
// //--------------------------------------------------
//	
//
// });
// using jQuery
// syntax to use jQuery
/*
 * 
 * $(selector).action1().action2();
 * 
 */

// $(document).ready(function(){});
$(function() {

	var $box = $('.jumbotron');
	$('.btn-danger').click(function(e) {
		$box.hide();
	});
	$('.btn-success').click(function(e) {
		$box.show();
	});

});

// --------------------------------------------------

// Model ( from server )
var user = {
	name : 'Nagabhushanam'
};

$(function() {
	
	// ViewModel
	var UserViewModel = function(user) {
		var self=this;
		this.name = ko.observable(user.name);
		this.resetName=function(){
			self.name('');
		}
	};
	var vm = new UserViewModel(user);

	ko.applyBindings(vm,$('#box1').get(0));

});

// -----------------------------------------------------
