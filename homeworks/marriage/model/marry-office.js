var { Marriage } = require("./marriage.js");

function MarryOffice() {

    var marriages = [];
    var noOfMarriages = 0;

    function getMarriage(user1, user2){
        var exist = false;
        marriages.forEach(function(marriage){
            console.log("Checking marriage: ")
            console.dir(marriage)

            if(marriage.isBetween(user1, user2)){
                exist = true
            }                
        })
        return exist;
    }

    this.getMarriages = function () {
        return marriages;
    }

    this.getNoOfMarriages = function (){
        return marriages.length;
    }

    function getCoupleOf(user) {
        var found = marriages.filter(function (marriage) {
            return marriage.hasMember(user);
        })
        if (found.length > 0) {
            //console.log(found.length, " marriages found");
            return found[0].getPartner(user);
        }
        return null;
    }

      this.marry = function (user1, user2) {
        if (getCoupleOf(user1)) {
            console.log("Sorry user1 is already married")
            return false;
        }
        if (getCoupleOf(user2)) {
            console.log("Sorry user2 is already married")
            return false;
        }
        else {
            console.log("I am adding a new marriage")
            marriages.push(new Marriage(user1, user2))
            noOfMarriages++;
            return true;
        }
    }

    this.divorce = function (user1, user2) {
        var marriageToEnd = getMarriage(user1, user2);
        if(marriageToEnd){
            var indexToSplice = marriages.indexOf(marriageToEnd);
            marriages.splice(indexToSplice);
            return true;
        }
        else{
            console.log(`There is not such a marriage between ${user1.name} and ${user2.name}`)
            return false;
        }

    }
    this.getCoupleOf = getCoupleOf;
}



module.exports = { MarryOffice: MarryOffice }