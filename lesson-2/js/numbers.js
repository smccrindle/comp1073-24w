const output = document.querySelector("p");

/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let myInt = 5;
let myFloat = 6.3452346;
let myDouble = 5.394857364859687;

output.textContent = "Number type of mDouble is: " + typeof(myDouble);

// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let step2a = 5 ** 2;
step2a = Math.pow(5, 2);
output.textContent = step2a;

// Try declaring and initializing a couple of variables as numbers
let num1 = 90;
let num2 = 30;
let step2b = num1 + num2 * num1;
output.textContent = step2b;

/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
let step2c = (num1 + num2) / num1 * num2;
output.textContent = step2c;

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
let step3 = 5;
step3 --; // (step3 = step3 - 1)
output.textContent = step3;

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
let step4 = 5;
step4 += 2;
console.log(step4);
output.textContent = step4;

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
let step5a = 5;
let step5b = 4;
let step5c = step5a <= step5b;

output.textContent = step5c;

