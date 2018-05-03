var variable = "value1";

function action1() { console.log("Action 1"); }
function action2() { console.log("Action 2"); }
function action3() { console.log("Action 3"); }
function defaultAction() { console.log("Default Action"); }

if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();