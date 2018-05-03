"use strict"

/* Checked exceptions */

try{
    try{
        var a = 10;
        throw new Error("grr");
        // b = a;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Check your references");
        }
        else if(e instanceof TypeError){
            console.log("Check your value types")
        }
        else{
            throw e;
        }
    }

}
catch(e){
    console.log("Something (I dont know what) went wrong!", e.message);
}

