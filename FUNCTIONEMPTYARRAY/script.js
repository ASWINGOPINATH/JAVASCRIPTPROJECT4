function checkArray() {
	// Array inputs
	let emptyArray = [];
	let fineArray = [1, 2, 3, 4, 5];

	// Checking array
	let output = emptyArray.some((element) => true);
	// Display output
	console.log("Output for emptyArray:" + output);

	// Checking array
	output = fineArray.some((element) => true);
	// Display output
	console.log("Output for fineArray:" + output);
}
// Function call
checkArray();
