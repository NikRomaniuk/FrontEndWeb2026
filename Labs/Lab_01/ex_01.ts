function addition(value: string)
{
    console.log("Value is: " + value);
}

let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();

addition(sumOfVals);

// =============================
// SHORTCUTS
// =============================
// Shift + Alt + F -> Formatting

// Compile TypeScript/JavaScript
// tsc ...ts
// node ...js

// =========================
// ANGULAR
// =========================
// Install Angular
// npm i -g @angular/cli
//
// Check Angular Version
// ng v
//
// Create new Angular App
// ng new my-first-app
//
// Build an app
// ng serve