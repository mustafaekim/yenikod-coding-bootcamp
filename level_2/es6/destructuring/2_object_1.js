var user = {
    name: {
        firstName: "Mustafa"
        , lastName: "Ekim"
    }
    , age: 35
}

var { name: { firstName: name1, lastName: name2 }, age: old } = user;
console.log(`
    ${name1} ${name2} is ${old} years old
`)