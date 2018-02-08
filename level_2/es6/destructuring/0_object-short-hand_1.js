var user = {
    name: "Mustafa"
    , age: 35
}

var school = {
    name: "SJ"
}

var result = { user, school } 
/* 
    same as 
    var result = {
        user: user
        school: school
    }

*/


console.log(result.user.name);