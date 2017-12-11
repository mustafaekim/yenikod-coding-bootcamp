var startDate = new Date(2017, 10, 22); // 21 kasım 2017
console.log("(1)", startDate);

function daysAgo(date, noOfDays) {
    var oneDayInSecond = 1000 * 60 * 60 * 24;
    return new Date(date.getTime() - noOfDays * oneDayInSecond);
}

function daysAfter(date, noOfDays) {
    var oneDayInSecond = 1000 * 60 * 60 * 24;
    return new Date(date.getTime() + noOfDays * oneDayInSecond);
}

function User(id, name) {
    this.id = id;
    this.name = name;

    this.attendances = [];

    this.addAttendance = function (attendance) {
        this.attendances.push(attendance);
    }

    this.addAttendances = function (attendances) {
        var self = this;
        attendances.forEach(function (attendance) {
            self.addAttendance(attendance);
        })
    }

    this.calculateTotalAttendedHours = function calc() {
        var total = 0;
        this.attendances.forEach(function (attendance) {
            total += attendance.noOfHours
        })
        return total;
    }
}

function Attendance(date, noOfHours) {
    this.date = date;
    this.noOfHours = noOfHours;
}

var talip = new User("Talip");
var ozan = new User("Ozan");

talip.addAttendances(
    [
        new Attendance(daysAfter(startDate, 0), 3)
        , new Attendance(daysAfter(startDate, 1), 4)
        , new Attendance(daysAfter(startDate, 2), 3)
        , new Attendance(daysAfter(startDate, 3), 5)
        , new Attendance(daysAfter(startDate, 4), 3)
        , new Attendance(daysAfter(startDate, 5), 4)
        , new Attendance(daysAfter(startDate, 6), 2)
    ]
);

ozan.addAttendances([
    new Attendance(daysAfter(startDate, 0), 2)
    , new Attendance(daysAfter(startDate, 1), 3)
    , new Attendance(daysAfter(startDate, 2), 3)
    , new Attendance(daysAfter(startDate, 3), 4)
    , new Attendance(daysAfter(startDate, 4), 5)
    , new Attendance(daysAfter(startDate, 5), 3)
    , new Attendance(daysAfter(startDate, 6), 3)
])



console.log(
    talip.calculateTotalAttendedHours(),
    ozan.calculateTotalAttendedHours()
)



