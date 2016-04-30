/**
 * http://usejsdoc.org/
 */

document.addEventListener('DOMContentLoaded', function() {

	console.log('DOM ready');

	var box = document.querySelector('.jumbotron');
	var hideBtn = document.querySelector('.btn-danger');
	var showBtn = document.querySelector('.btn-success');

	hideBtn.addEventListener('click', function(e) {
		box.style.display = 'none';
	});
	showBtn.addEventListener('click', function(e) {
		box.style.display = 'block';
	});

});
