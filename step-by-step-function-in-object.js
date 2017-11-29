var a = {
    hi: function add(a, b){    
        return a+b;
    }
}

var b = a.hi(4, 8);

var c = a["hi"];
console.log(c);

// burada ["hi"] a objesinin içindeki hi prperty'sinin değerini döner yani [function: add]
var d = a["hi"](3, 7);
console.log(d);