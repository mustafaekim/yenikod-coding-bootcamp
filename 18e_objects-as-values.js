function analyse(obj){
    for(var objKey in obj){
        console.log(objKey + " : " + obj[objKey]);
    }
}



analyse({
    name: "Mustafa",
    age: 35,
    school: "mkool"
});