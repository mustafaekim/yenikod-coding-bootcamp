/*
    Temporary constructor
        - This pattern is named temporary because before ES5, Object.create didn't exist and the functionality could be achieved through
        a temporary function.

        * Child.prototype = Object.create(Parent.prototype)

        Creates a new object, which is linked to Parent.prototype, as a placeholder for shared utilities of Child objects

    Object.create() =>
        function inherit(C, P) {
            var F = function () {};
            F.prototype = P.prototype;
            C.prototype = new F();
        }

*/

function User(userId, name){
    /* The function body is not inherited*/
    this.userId = userId; 
    this.name = name;
}

User.prototype.getName = function(){
    return this.name;
}

function Student(studentNo, name, userId){
    this.studentNo = studentNo;
    this.name = name;
    this.userId = userId;
}

Student.prototype = Object.create(User.prototype);
// We can optionally add a constructor property to Child.property object that references Child, but depending on constructor is not a good pattern
Student.prototype.constructor = Student;

var user1 = new Student(1, "Mustafa");
console.log("(1)", user1.getName());
console.log("(2)", user1.constructor == Student);
console.log("(3)", user1 instanceof User);