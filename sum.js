const double = (n) => n * 2;
console.log(double(10));
const [, , num1, num2] = process.argv;
// let sum = parseInt(num1) + parseInt(num2);
// console.log(sum);
// console.log(double(num1));
// console.log(num1 + num2);
const sum = (a,b) => a+b;
console.log(sum(+num1,+num2));