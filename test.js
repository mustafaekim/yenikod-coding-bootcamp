function go() {
    console.log(arguments);
}


var arr = ["mustafa", "ekim"]
go(arr.map(a => "***" + a))