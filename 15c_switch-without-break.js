// If you omit break from a case, and that case matches or runs, execution will continue with the next case's statements regardless of that case matching. 


// Example 1
var a=2;
switch (a) {
	case 2:
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
	// fallback
}


// Example 2
/*
var weather = "sunny";

switch (weather) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly.");
	case "cloudy":
		console.log("Go outside.");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}
*/