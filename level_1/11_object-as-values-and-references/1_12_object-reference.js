function bar(ahmet) {
    console.log(mehmet.name);
    ahmet.name = "tname";
}

var z = 10;
//foo(z);

var mehmet = { name: "hop" }
bar(mehmet);

console.log(z, mehmet.name);