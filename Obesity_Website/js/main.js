// hook into the form's submit event
$("#calculator").submit(function(e) {

	// read the necessary values
	var height = $("#height").val(); // no parameter => get the value
	var weight = $("#weight").val();	
	var avg-miles = $("#avg-miles").val();
	var miles-reduced = $("#miles-reduced").val();
	var months = $("#months").val();

	// do the calculation and write the output value
	var calc = calcFunction(height, weight, avg-miles, miles-reduced, months);
	$("#wt_chg").val(calc); // parameter => set the value

	// prevent form submission
	e.preventDefault();
});

function calcFunction(a, b, c, d, e){
	return a + b + c + d + e;
}