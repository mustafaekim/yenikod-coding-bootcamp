var { Marriage } = require("./marriage.js");

function MarryOffice() {

    var marriages = [];

    this.getMarriages = function(){
        return marriages;
    }


    function getCoupleOf(user) {
        var found = marriages.filter(function (marriage) {
            return marriage.hasMember(user);
        })
        if (found.length > 0) {
            console.log(found.length, " marriages found");
            return found[0].getPartner(user);
        }
        return null;
    }

    this.marry = function (user1, user2) {
        if (getCoupleOf(user1) || getCoupleOf(user2)) {
            console.log("One of the users is already married")
            return false;
        }
        else {
            console.log("I am createing a new marriage")
            marriages.push(new Marriage(user1, user2))
            return true;
        }
    }

    this.getCoupleOf = getCoupleOf;
}


module.exports = { MarryOffice: MarryOffice }