"use strict"

// finally always run! and it overwrites any previous return statement

var name = (
    function(){
        try{
            //throw new Error("I have an error message here");
            var name = "Mustafa"
            return name;

        }
        catch(e){
            return "Musti";
        }
        finally{
            return "Mıstık"
        }
    }
)();
console.log(name);




