// Define a bool
let flag: boolean = true;
console.log("Value assigned to flag is " + flag)    // Print out

// Define a string
let str: String = "Hello World!";
console.log("Value assigned to str is " + str)      // Print out

// Define an integer (and float conviniently)
let int: number = 42;
console.log("Value assigned to int is " + int)      // Print out

// Define an float (and integer conviniently)
let float: number = 42.42;
console.log("Value assigned to float is " + float)  // Print out

// Define an array of numbers
let numArray: number[] = [10, 20, 30, 40, 50];
console.log("Values in the numbers array:");        // Print out

// Go through all elements using .forEach with an arrow function (lambda expression)
// With extra log formatting
numArray.forEach((num, index) => console.log(`Value ${index + 1}: ${num}`));