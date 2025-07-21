/* -------- CONDITIONAL STATEMENTS ------------------------------------------ */

/*
👉 What is Conditional Statements ?

Conditional statements are used to perform different actions based on different conditions.
They allow your program to make decisions and execute code blocks conditionally.

Types of Conditional Statements in JavaScript:-

1. if Statement
2. if...else Statement
3. if...else if...else Statement
4. switch Statement
5. Ternary Operator (Shorthand if...else):-

👉 if Statement

Executes a block of code if the condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

👉 if...else Statement

Executes one block if the condition is true, and another if it's false.

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}

👉 if...else if...else Statement

Allows checking multiple conditions.

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

👉 switch Statement

Tests a variable against multiple possible cases.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

👉 Ternary Operator (Shorthand if...else)

A compact syntax for simple if...else.

let message = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(message);

*/

/************ PRACTISE QUESTIONS **************************************************************************************/

// 👉 Q.1 Apply a Shop Discount on specific purchase amount and return the final value after reducing a discount.

// 0 - 1000 -> 0%
// 1001 - 3000 -> 5%
// 3001 - 5000 -> 10%
// > 5000 -> 20%

let purchaseValue = Number(prompt("Enter your purchase amount."));
let discount = 0;

if (purchaseValue > 0 && purchaseValue <= 1000) {
  discount = 0;
} else if (purchaseValue > 1000 && purchaseValue <= 3000) {
  discount = 5;
} else if (purchaseValue > 3000 && purchaseValue <= 5000) {
  discount = 10;
} else {
  discount = 20;
}

function finalValue(purchaseAmount, discountPercentage) {
  const discountValue = (purchaseAmount * discountPercentage) / 100;
  return purchaseAmount - discountValue;
}

console.log(`You need to pay: ${finalValue(purchaseValue, discount)}`);

// 👉 Q.2 You need to calculate electricity bill according to units. Ex: Total Unit is 120, Then upto 100 by 4/unit, 20 units by 6/unit.

// Unit             Price
// up to 100        4/unit
// 100 to 200       6/unit
// 200 to 400        8/unit
// > 400            13/unit

let units = Number(prompt("Enter you electricity units."));
let billPayable = 0;

if (units > 400) {
  billPayable = (units - 400) * 13;
  units = 400;
} // 320*13 = 4160

if (units > 200 && units <= 400) {
  billPayable += (units - 200) * 8;
  units = 200;
} // 200*8 = 1600

if (units > 100 && units <= 200) {
  billPayable += (units - 100) * 6;
  units = 100;
} // 100*6 = 600

billPayable += units * 4; // 400

console.log(billPayable);

// 👉 4. INR Denomination

// Example:

// 4888      9(Note of 500)
//  388      1(Note of 200)
//  188      1(Note of 100)
//   88      1(Note of 50)
//   38      1(Note of 20)
//   18      1(Note of 10)
//    8

let inrAmt = 4888;
let note = 0;

if (inrAmt >= 500) {
  note = Math.floor(inrAmt / 500);
  inrAmt = inrAmt % 500;
}

if (inrAmt >= 200) {
  note += Math.floor(inrAmt / 200);
  inrAmt = inrAmt % 200;
}

if (inrAmt >= 100) {
  note += Math.floor(inrAmt / 100);
  inrAmt = inrAmt % 100;
}

if (inrAmt >= 50) {
  note += Math.floor(inrAmt / 50);
  inrAmt = inrAmt % 50;
}

if (inrAmt >= 20) {
  note += Math.floor(inrAmt / 20);
  inrAmt = inrAmt % 20;
}

if (inrAmt >= 10) {
  note += Math.floor(inrAmt / 10);
  inrAmt = inrAmt % 10;
}

console.log("Note is: ", note);
console.log("Amount in INR: ", inrAmt);
