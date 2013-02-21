$(document).ready(function(){
 
	var x = 0;
 
	window.setInterval(hb, 1000);
 
	function hb() {
		x++;
		console.log("hb is "+x);
	}

});