// Define a bool
var flag = true;
console.log("Value assigned to flag is " + flag); // Print out
// Define a string
var str = "Hello World!";
console.log("Value assigned to str is " + str); // Print out
// Define an integer (and float conviniently)
var int = 42;
console.log("Value assigned to int is " + int); // Print out
// Define an float (and integer conviniently)
var float = 42.42;
console.log("Value assigned to float is " + float); // Print out
// Define an array of numbers
var numArray = [10, 20, 30, 40, 50];
console.log("Values in the numbers array:"); // Print out
// Go through all elements using .forEach with an arrow function (lambda expression)
// With extra log formatting
numArray.forEach(function (num, index) { return console.log("Value ".concat(index + 1, ": ").concat(num)); });
