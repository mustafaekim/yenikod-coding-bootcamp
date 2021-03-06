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