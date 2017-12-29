var myLib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function User(userId, firstName, lastName, email, mobile){
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
}


/* Export */
module.exports = User;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Balance = __webpack_require__(2).Balance;
var Transaction = __webpack_require__(3).Transaction;
var User = __webpack_require__(0);


module.exports = {
    Balance: Balance
    , Transaction: Transaction
    , User: User
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function Balance(balanceId, userId, startBalance) {
    this.balanceId = balanceId;
    this.userId = userId;
    this.current = startBalance;

    this.transactions = [];
}

Balance.prototype.addTransaction = function (dateOccured, amount, description, type, reason) {
    var transactionId, before;

    if(this.transactions.length == 0){
        transactionId = 1;
        before = this.current;
    }
    else{
        var lastTransaction = this.transactions[this.transactions.length-1]
        transactionId = lastTransaction.transactionId + 1;
        before = lastTransaction.after;
    }

    var newTransaction = new Transaction(transactionId, dateOccured, amount, before, before+amount, description, type, reason);
    this.transactions.push(newTransaction);
    this.current = this.current + newTransaction.amount;
}


function Transaction(transactionId, dateOccured, amount, before, after, description, type, reason) {
    this.transactionId = transactionId;
    this.dateOccured = dateOccured;
    this.amount = amount;
    this.description = description;
    this.type = type;
    this.reason = reason;

    this.before = before;
    this.after = after;
}
Transaction.TYPES = { IN: "DEBIT", OUT: "CREDIT" };
Object.defineProperty(Transaction, "TYPES", { writable: false, configurable: false });
Object.freeze(Transaction.TYPES);


/* Exports */

module.exports = {
    Balance: Balance,
    Transaction: Transaction
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var User = __webpack_require__(0);

function Student(userId, firstName, lastName, email, mobile){
    User.apply(this, arguments) // Rent Constructor Pattern
}
Student.prototype = Object.create(User.prototype); // Temporary Constructor Pattern
Student.prototype.constructor = Student;


/* Export */
module.exports = Student;


/***/ })
/******/ ]);