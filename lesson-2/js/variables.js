/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Scott";
myAge = "52";

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Iain";
console.log("Hi, I am " + myName + " and I am " + myAge + " years old.");

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;
let modelYear = 2005;
// Strings (use '' or "" or ``)
let typeCar = 2015 + "Honda Civic ";
console.log(typeCar);

// Booleans
let iAmTired = false;

// Arrays
let myNameArray = ["Chris", "Scott", "Rich"];
let myNumArray = [5, 5, 6, 7];
let myMixedArray = ["Scott", 52, false];

// Objects
let myDog = {
    name: "Bentley",
    breed: "retriever",
    size: "large",
    age: 5
}

// STEP 5: Typing (JavaScript is a loosely-typed languag
console.log(typeof(myDog));