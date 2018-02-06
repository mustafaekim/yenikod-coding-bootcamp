["Mustafa", "Ekim", "Ozan", "Talip"].forEach(function (i) {
    console.log(i);
})


var predicate = function (i) {
    return String(i).length > 5;
}

console.log(predicate("Talip"));

var names = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

console.log(
    names.filter(predicate)
);

console.log(
    names.map(function (i) {
        return "10" + i;
    })
)