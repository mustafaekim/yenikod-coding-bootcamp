var user = {
    name: "Mustafa"
    , address: {
        street: "Noter"
        , block: "B"
        , flat: 4
        , city: "İstanbul"
    }
    , identity: "202030230"
    , age: 34
    , languages: [
        { language: "french", level: "Advanced" }
        , { language: "english", level: "B2" }
        , { language: "turkish", level: "Mother" }
        , { language: "javascript", level: "Father" }
    ]
    , schools: [
        { type: "elementary", name: "Sezin", start_year: 1989, end_year: 1994 }
        , { type: "middle school", name: "SJ", start_year: 1994, end_year: 1999 }
        , { type: "high school", name: "SJ", start_year: 1999, end_year: 2002 }
    ]
    , work_experiences: [
        { company: "ITS", start_year: 2006, end_year: 2007 }
        , { company: "Citibank", start_year: 2007, end_year: 2009 }
    ]
}

// console.log("Advanced" == user.languages[0].level);
// console.log("İstanbul" == user.address["city"])
// console.log(4 == user.languages.length)

// for(var i=0;i<user.schools.length;i++){
//     console.log(user.schools[i].type)
// }


function calculateNoOfWorkYearExperience(user) {
    var total = 0;
    for (var i = 0; i < user.work_experiences.length; i++) {
        total += user.work_experiences[i].end_year - user.work_experiences[i].start_year + 1;
    }
    return total;
}

//console.log(calculateNoOfWorkYearExperience(user) == 5)


function calculateTotalYearsInSchool(user) {
    return user.schools[user.schools.length - 1].end_year - user.schools[0].start_year + 1;
}

//console.log(calculateTotalYearsInSchool(user) == 14)

function greet(user) {
    return "Hi, "
        + "My name is "
        + user.name
        + ", I am "
        + user.age
        + " years old. I know "
        + user.languages.length
        + " languages and I have spent "
        + calculateTotalYearsInSchool(user)
        + " years in school, "
        + calculateNoOfWorkYearExperience(user)
        + " years at work."
}

// console.log(
//     "Hi, My name is Mustafa, I am 34 years old. I know 4 languages and I have spent 14 years in school, 5 years at work." == 
//     greet(user)
// );


function buildUser(first_name, last_name, yearOfBirth) {
    var languages = [];
    for (var i = 3; i < arguments.length; i++) {
        languages.push(arguments[i]);
    }

    return {
        name: first_name + " " + last_name
        , age: 2018 - yearOfBirth
        , languages: languages
    }
}

var mustafa = buildUser("Mustafa", "Ekim", 1983, "english", "french", "turkish", "javascript");
// console.log(mustafa.name == "Mustafa Ekim");
// console.log(mustafa.age == 35);
// console.log(mustafa.languages.length == 4);

var ekim = buildUser("Ekim", "Kurt", 1985, "english", "turkish", "javascript");
var mr_who = buildUser("Mr", "Who", 1974, "english");

function agesTotal() {
    var totalAge = 0;
    for (var i = 0; i < arguments.length; i++) {
        totalAge += arguments[i].age
    }
    return totalAge;
}

// console.log(
//     agesTotal(mustafa, ekim, mr_who, mustafa)
//     == 147
// )

function getOlder(user1, user2) {
    return user1.age > user2.age ? user1 : user2;
}

//console.log(getOlder(mustafa, ekim).name == "Mustafa Ekim");

function getAgeDiff(user1, user2) {
    return user1.age - user2.age;
}
//console.log(getAgeDiff(mustafa, ekim) == 2);

function getOldest(user1, user2, user3) {
    var oldest = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].age > oldest.age)
            oldest = arguments[i]
    }
    return oldest;
}
//console.log(getOldest(mustafa, mustafa, mustafa, mustafa, ekim, ekim, mr_who).name == "Mr Who")
