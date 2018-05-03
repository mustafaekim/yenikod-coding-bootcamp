// Build an array of numbers
var my_numbers = [10, 20];

// add 50 into the array
my_numbers.push(50);

// add another array of numbers into the array
my_numbers = my_numbers.concat([12, 34, 4, 54, 34, 199, -5, -6, -10]);

/* *_* */

// Return an array of only negative numbers
function onlyNegatives(nums) {
    var negatives = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negatives.push(nums[i]);
        }
    }
    return negatives;
}
console.log("(1: negative numbers)", onlyNegatives([1, -1, 5, -5, 7]).length == 2)


// Return average of only positive numbers
function avgOfPositives(nums) {
    var counter = 0;
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            total += nums[i];
            counter++;
        }
    }
    return total / counter;
}
console.log("(2: average of positive numbers)", avgOfPositives([10, 20, 30, 40, -50, -70]) == 25)


// Return average of negative numbers
function avgOfNegatives() {
    var counter = 0;
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            total += arguments[i];
            counter++;
        }
    }
    return total / counter;
}
console.log("(3: average of negative numbers)", avgOfNegatives(10, 20, 30, 40, -50, -70) == -60)


// Return an array of distinct numbers only
function makeUniq(numbers) {
    var uniq = [];
    for (var i = 0; i < numbers.length; i++) {
        if (!checkIfExists(uniq, numbers[i])) {
            uniq.push(numbers[i]);
        }
    }
    return uniq;
}
function checkIfExists(numbers, num) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == num) {
            return true;
        }
    }
    return false;
}
console.log("(4.1)", checkIfExists([4, 5, 6], 4) == true);
console.log("(4.2)", checkIfExists([4, 5, 6], 14) == false);
console.log("(4.3: distinct numbers)", makeUniq([3, 4, 5, 4, 5, 6]).length == 4)
console.log("(4.4: distinct numbers)", makeUniq([4, 6, 5, 4, 6, 9]).length == 4)





