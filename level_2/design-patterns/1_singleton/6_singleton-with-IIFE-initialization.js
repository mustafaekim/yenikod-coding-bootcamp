var myobj; // this will be the object
(function () {
    // private members
    var name = "my, oh my";
    // implement the public part
    // note -- no `var`
    myobj = {
        // priviledged method
        getName: function () {
            return name;
        }
    };
}());