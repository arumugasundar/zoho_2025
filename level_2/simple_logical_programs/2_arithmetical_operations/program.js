const rs = require("readline-sync");
const m = parseInt(rs.question("Enter the value for M : "));
const n = parseInt(rs.question("Enter the value for N : "));

console.log("Addition of %d and %d is %d", m, n, m+n);
console.log("Subtraction of %d and %d is %d", m, n, m-n);
console.log("Multiplication of %d and %d is %d", m, n, m*n);
console.log("Division of %d and %d is %d", m, n, m/n);