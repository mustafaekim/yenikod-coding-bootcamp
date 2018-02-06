/*
    Share prototype pattern
        * Child.prototype = Parent.prototype

    all objects (Students & Users) actually share the same prototype. 
    
    Drawback 
        if one child or grandchild somewhere down the inheritance chain modifies the prototype
            it affects all parents and grandparents.


*/

function User(userId, name){
    this.userId = userId;
    this.name = name;
}

User.prototype.getName = function(){
    return this.name;
}

function Student(name, studentNo){
    this.name = name;
    this.studentNo = studentNo;
}
Student.prototype = User.prototype;

var user1 = new Student("Mustafa", 356);
console.log("(1)", user1.getName());