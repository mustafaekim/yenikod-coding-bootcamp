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