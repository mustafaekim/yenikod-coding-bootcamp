/*
    Getters & Setters
        - Getters are properties that actually call a hidden function to retrieve a value
        - Setters are properties that actually call a hidden function to set a value

    If you defined getter or setter, we call "accessor descriptor" instead of "data descriptor"

    Using the Javascript get/set mechanism, you can't store the value in the object using the same name
*/


var user = {
    firstName: "Mustafa",
    lastName: "Ekim",
    get fullName(){
        return this.firstName + " " + this.lastName
    }
    , setFirstName: function(firstName){
        this.firstName = firstName
    }
}

console.log("(1)", user.fullName);
console.log("(2)", typeof user.fullName);

// w/o setter
user.fullName = "Mustafa Kemal";
console.log("(3)", user.fullName);


// define a setter for fullName property (accessor descriptor)
Object.defineProperty(user, "fullName", {
    set: function(fullName){
        var names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
})
user.fullName = "Mustafa Kemal";
console.log("(4)", user.lastName);

// Using class setter
user.setFirstName("Ahmet");
console.log("(5)", user.fullName);

// List property names
console.log("(6)", Object.getOwnPropertyNames(user));