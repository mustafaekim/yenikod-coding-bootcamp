// const keyword declares a block scoped variable that cannot be re-assigned
// const keyword does not declare a variable that cannot change

const arr = [1, 2];
arr[2] = 3; // I can change the value inside const arr. that's ok
//arr = 1; // -> throws Error // I cannot re-assign the variable arr. that's not ok


// const is a good choce if the variable is immutable and you want your variable to always point to this immutable value
const SERVER_IP_ADDRESS = "198.168.1.1";

// because string value is immutable, you cannot change it's value
// because const cannot be re-assigned, SERVER_IP_ADDRESS always returns the given string throughout the code, for sure

// I follow the naming convention that constant variables are written all upper-case. That allows me to understand throughout the code that it's a constant