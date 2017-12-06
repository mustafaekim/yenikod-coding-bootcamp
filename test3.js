function user(name){
    this.name = name;
}

user.prototype.greet  = function(){
    return "hello, " + this.name
}

var mustafa = new user("Mustafa");
console.log(mustafa)

var cengiz = new user("Cengiz");

console.log(cengiz.greet());