function isStudent(state, studentId) {
    state.studentId = studentId;

    return {
        getStudentId: function () {
            return state.studentId;
        }
        , setStudentId: function (value) {
            state.studentId = value;
        }
    }
}

function isEmployee(state, companyName, salary) {
    state.companyName = companyName;
    state.salary = salary;

    return {
        getCompanyName: function () {
            return state.companyName;
        }
        , setSalary: function (value) {
            state.salary = salary;
        }
        , calculatYearlySalary: function () {
            return state.salary * 12;
        }
    }
}

function isProgrammer(state, languages) {
    state.languages = languages;

    return {
        getLanguages: function () {
            return state.languages;
        }
        , addNewLanguage: function (language, level) {
            state.languages.push({ language, level })
        }
        , buildCV: function () {
            return "Hello, my name is " + state.firstName + " I know " + state.languages.length + " programming languages"
        }
    }
}

function userFactory(firstName, lastName, age) {
    var state = { firstName, lastName, age }

    return Object.assign(
        {
            setFirstName: function(value){
                state.firstName = value;
            }
        }
        , isStudent(state, 2140341)
        , isEmployee(state, "Vanilya", 1000)
        , isProgrammer(state, [
            { language: "JavaScript", level: "Advanced" }
            , { language: "Go", level: "Medium" }
        ])
    )
}

var mustafa = userFactory("Mustafa", "Ekim", 35)
console.log(mustafa.buildCV());

mustafa.addNewLanguage("SQL", "Advanced");
console.log(mustafa.buildCV());

mustafa.setFirstName("Mahmut");
console.log(mustafa.buildCV());

console.dir(mustafa)
/*
{ setFirstName: [Function],
  getStudentId: [Function],
  setStudentId: [Function],
  getCompanyName: [Function],
  setSalary: [Function],
  calculatYearlySalary: [Function],
  getLanguages: [Function],
  addNewLanguage: [Function],
  buildCV: [Function] }
*/