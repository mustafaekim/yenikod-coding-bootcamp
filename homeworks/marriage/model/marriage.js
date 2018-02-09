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
}

//var mar1 = new Marriage({}, {});
//console.log(mar1.getParticipants())


module.exports = { Marriage: Marriage };
