/**
 * http://usejsdoc.org/
 */

function tng() {

	var tnrName = 'Nag'; // will get moved to 'heap'
	console.log(tnrName + " teaching JS");

	// event
	setTimeout(function() {
		try {
			throw new Error('oops...');
			console.log('learnt JS from ' + tnrName);
		} catch (e) {
			console.log('i caught ' + e.message);
		}
	}, 5000);

	console.log(tnrName + " finished teaching JS");
}

tng();
