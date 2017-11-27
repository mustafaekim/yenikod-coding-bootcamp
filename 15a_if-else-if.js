// Example 1
/*
if (a == 2) {
	// do something
}
else if (a == 10) {
	// do another thing
}
else if (a == 42) {
	// do yet another thing
}
else {
	// fallback to here
}
*/

// Example 2
/*
var num = 50;

if (num < 10)
	alert("Small");
else if (num < 100)
	alert("Medium");
else
	alert("Large");
*/


// Example 3
//var variable = "value4";
function action1() { console.log("Action 1"); }
function action2() { console.log("Action 2"); }
function action3() { console.log("Action 3"); }
function defaultAction() { console.log("Default Action"); }

if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();