/* -------- ITERATIONS ------------------------------------------ */

/*
👉 What is Loops ?

Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is false.
Loops help reduce code repetition and make the code more efficient.

Types of Loops in JavaScript:-

| Loop Type         | Purpose                                                           |
| ----------------- | ----------------------------------------------------------------- |
| `for` loop        | Runs code a specific number of times                              |
| `while` loop      | Runs code **while** a condition is true                           |
| `do...while` loop | Runs code **at least once**, then repeats while condition is true |
| `for...of` loop   | Loops through **iterable objects** like arrays, strings           |
| `for...in` loop   | Loops through **properties** of an object                         |

👉 for Loop

Repeats a block of code a specific number of times.

for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

👉 while Loop

Runs as long as the condition is true.

let i = 0;
while (i < 5) {
  console.log("Count: " + i);
  i++;
}

👉 do...while Loop

Runs at least once even if the condition is false.

do {
  console.log("Count: " + i);
  i++;
} while (i < 5);

👉 for...of Loop

Loops through values of an iterable (like arrays, strings).

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

👉 for...in Loop

Loops through keys (properties) of an object.

let person = { name: "John", age: 30 };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

👉 Loop Control Statements

| Control Statement | Purpose                                 |
| ----------------- | --------------------------------------- |
| `break`           | Exit the loop immediately               |
| `continue`        | Skip the current iteration and continue |

for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Stops loop when i is 3
  if (i === 1) continue; // Skips when i is 1
  console.log(i);
}

👉 Nested Loops

A nested loop is a loop inside another loop.
It is commonly used when you need to work with multi-dimensional structures like grids, matrices, or tables.

for (let i = 1; i <= 3; i++) {
  console.log("Outer Loop iteration: " + i);

  for (let j = 1; j <= 2; j++) {
    console.log("  Inner Loop iteration: " + j);
  }
}

👉 Infinite Loops

An infinite loop is a loop that never ends because the exit condition is never met.

Infinite loop (Be careful! This will never stop)

while (true) {
  console.log("This will run forever!");
}

let i = 0;
while (i >= 0) { // Condition is always true
  console.log(i);
  i++;
}

❌ Why Infinite Loops Are Dangerous:

They can crash your browser or application.
They freeze your program and system resources.

✅ How to Avoid Infinite Loops:

Make sure the loop condition will eventually become false.
Ensure increment/decrement or exit logic is correctly written.
Always check your loop boundaries carefully.

let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Properly incrementing to eventually stop the loop
}

*/

/************ PRACTISE QUESTIONS **************************************************************************************/

// 👉 Q.1 Display the available list of products.

let products = ["Laptop", "Phone", "Tablet"];

for (let product of products) {
  console.log(`Available Products: ${product}`);
}

// 👉 Q.2 Looping Through a Table

let table = [
  ["Apple", "Banana"],
  ["Carrot", "Tomato"],
];

for (let row = 0; row < table.length; row++) {
  for (let col = 0; col < table[row].length; col++) {
    console.log(table[row][col]);
  }
}

// 👉 Q.3 Summing Numbers from 1 to N

let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Sum is:", sum);
