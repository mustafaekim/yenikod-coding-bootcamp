"use strict"

try{
    try{
        try{
            a = 4;
        }
        finally{
            console.log("inner finally");
        }
    }
    finally{
        console.log("middle finally");
    }
}
catch(ex){
    console.log(ex.message);
}
finally{
    console.log("outer finally");
}


