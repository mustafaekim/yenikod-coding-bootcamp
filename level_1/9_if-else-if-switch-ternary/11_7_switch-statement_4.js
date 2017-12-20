var age = 35;

// Even though you can plan default in any order, the code below may not run as you would expect, hence it is better to follow the right order (default at last)
// Below is a another case for fall-through

switch (age) {
	default: 
		console.log("Okey!");
	case 35:
		console.log("I am 35 too!");
		break;

}


// check what happens if age = 35!