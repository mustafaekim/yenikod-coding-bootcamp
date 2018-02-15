function Marriage(user1, user2) {
    var participants = [user1, user2];
    this.hasMember = function (user) {
        return participants.indexOf(user) > -1
    }

    this.getPartner = function (user) {
        if (!this.hasMember(user)) {
            return null
        }
        return participants[0] == user ? participants[1] : participants[0];
    }

    this.isBetween = function(user1, user2){
        var user1IsMember = participants.indexOf(user1) != -1;
        var user2IsMember = participants.indexOf(user2) != -1;
        console.log("Marriage is between: ", user1IsMember, user2IsMember);
        return user1IsMember && user2IsMember
    }
}

//var mar1 = new Marriage({}, {});
//console.log(mar1.getParticipants())


module.exports = { Marriage: Marriage };
