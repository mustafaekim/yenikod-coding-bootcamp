/*
    Equality operators
        ==      loose equals (allows implicit coercion if the operands are not of the same type)
        ===     strict equals (does not allow coercion if the operands are not of the same type)
        !=      loose not equals (allows implicit coercion if the operands are not of the same type)
        !==     strict not equals (does not allow coercion if the operands are not of the same type)
*/

var x = 35;
var name = "Mustafa";
var myAge = "35"; 

// ==
console.log(x == 35);
console.log(x * 2 == 70);
console.log("Mustafa" == name);
console.log(name == "Mustafa");
console.log(x == myAge);


// ===
console.log(x === 35);
console.log(x * 2 === 70);
console.log("Mustafa" === name);
console.log(name === "Mustafa");
console.log(x === myAge);

// !=
console.log(x != 35);
console.log(x * 2 != 70);
console.log("Mustafa" != name);
console.log(name != "Mustafa");
console.log(x != myAge);

// !==
console.log(x !== myAge);
