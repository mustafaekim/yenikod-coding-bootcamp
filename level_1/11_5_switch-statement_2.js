// If you omit break from a case, and that case matches or runs, 
// execution will continue with the next case's statements regardless of that case matching. 

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