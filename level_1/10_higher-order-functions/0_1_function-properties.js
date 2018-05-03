/* Functions are objects, hence having properties */
var hi = function (x, y, z) {
    return "hi";
}
console.log(hi);
console.log(hi.name);
console.log(hi.length);

// discouraged
hi.firstname = "Mustafa";
hi.lastname = "Ekim"
console.log(hi);

// console.log(x, y, z);