/* 
    The for...in statement iterates over the enumerable properties of an object.
*/

var me = {
    name: "Mustafa"
    , age: 35
    , car: ferrari
}
Object.defineProperty(me, "age", { writable: false, enumerable: false, configurable: false })

var ferrari = {
    model: 2001
}

var ahmet = Object.create(me);
ahmet.name = "Ahmet";
ahmet.price = Infinity;

for(var propertyKey in ahmet){
    console.log("(1)", propertyKey); // -> ?
}



