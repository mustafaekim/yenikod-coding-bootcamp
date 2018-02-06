"use strict";

var libName = "htmlUtils";

if(typeof exports == "undefined" && typeof module == "undefined"){
    console.log("LOADING BY BROWSER");
    window[libName] = {};
    var ctx = window[libName];
}
else{
    console.log("LOADING BY NODE");
    var ctx = {};
    module.exports = ctx;
}

(function(contextObject) {

    console.log("Hello");

    contextObject.tableBuilder = function(headers, rows){
        var noOfColumns = headers.length;

        var result = "";
        result += "<table>";
        result += "<tr>";
        headers.forEach(function(header){
            result += "<th>" + header + "</th>";
        })
        result +="</tr>";

        rows.forEach(function(row){
            result += "<tr>"

            row.forEach(function(column){
                result += "<td>" + column + "</td>";
            })


            result += "</tr>"
        })

        result +="</table>"

        return result;
    }


    /* ATTACH THE PUBLIC VARIABLES */
    //contextObject.User = User;
    //contextObject.Student = Student;
    //contextObject.Balance = Balance;

})(ctx);