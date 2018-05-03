// An array of objects
var people = [
    { name: "Mustafa", age: 15, gender: "Male", city: "Istanbul" }
    , { name: "Ekim", age: 14, gender: "Male", city: "Izmir" }
    , { name: "Banu", age: 16, gender: "Female", city: "Bursa" }
    , { name: "Dilara", age: 40, gender: "Female", city: "Istanbul" }
    , { name: "Dilek", age: 10, gender: "Female", city: "Bursa" }
]

// Find şeople's average age
function findAvgAge(people) {
    var total = 0;
    for (var i = 0; i < people.length; i++) {
        total = total + people[i].age
    }
    return total / people.length;
}
console.log("(1: Average age)", findAvgAge(people) == 19)

// Find the oldest person
function findOldestPerson(people) {
    var oldest = people[0];
    for (var i = 1; i < people.length; i++) {
        if (people[i].age > oldest.age) {
            oldest = people[i];
        }
    }
    return oldest;
}
console.log("(2: Oldest person)", findOldestPerson(people).name == "Dilara")

// Find the oldest man
function findOldestMale(people) {
    var oldest = people[0];
    for (var i = 1; i < people.length; i++) {
        if (people[i].gender == "Male") {
            if (people[i].age > oldest.age) {
                oldest = people[i];
            }
        }
    }
    return oldest;
}
console.log("(3: Oldest man)", findOldestMale(people).name == "Mustafa");

// Find the oldest person by the given gender
function findOldestByGender(people, gender) {
    var oldest = people[0];
    for (var i = 1; i < people.length; i++) {
        if (people[i].gender == gender && people[i].age > oldest.age) {
            oldest = people[i];
        }
    }
    return oldest;
}
console.log("(4: Oldest person by the given gender)", findOldestByGender(people, "Female").name == "Dilara")








