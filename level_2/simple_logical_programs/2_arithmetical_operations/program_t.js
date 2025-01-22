var rs = require("readline-sync");
var m = parseInt(rs.question("Enter the value for M : "));
var n = parseInt(rs.question("Enter the value for N : "));
console.log('Addition of %d and %d is %d', m, n, m + n);
console.log('Subtraction of %d and %d is %d', m, n, m - n);
console.log('Multiplication of %d and %d is %d', m, n, m * n);
console.log('Division of %d and %d is %d', m, n, m / n);
