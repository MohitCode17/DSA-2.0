/* -------- BASICS ------------------------------------------ */

/*
👉 What is Data Structure ?

A data structure is a way of organizing, storing, and managing data in a computer so that it can be used efficiently.

Types of Data Structure:-

1. Linear Data Structure: In linear data structures, the elements are arranged in sequence one after the other. example:- Array, Linked List, Stack, Queue.

2. Non Linear Data Structure: Data is arranged hierarchically or in a complex relationship. example: Tree, Graph.

3. Hash Based Structure: Data is stored in key-value pairs. example: Hash Table/ Hash Map.

👉 What is an Algorithm ?

An algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of inputs and produces the desired output.

Example:
An algorithm to add two numbers:

1. Take two number inputs
2. Add numbers using the + operator
3. Display the result

👉 How to solve a programming problem ?

Let say you have a given the problem, sum of two numbers:-

1. Understand the problem - Sum of Two numbers
2. Check the given values - 2 variables, Data Types, etc.
3. Figure out the approach - a + b = answer
4. Finally code

let a = 10;
let b = 20;
let answer = a + b;

👉 Data Types: Data types in programming languages define the kind of data that can be stored and manipulated within a program.
*/

// Primitive Types:-

/*
| Data Type | Example              | Description                          |
| ----------| -------------------- | ------------------------------------ |
| String    | `"Hello"`, `'World'` | Represents a sequence of characters. |
| Number    | `10`, `5.5`, `-3`    | Represents both integer and float.   |
| Boolean   | `true`, `false`      | Represents logical values.           |
| Undefined | `undefined`          | Variable declared but not assigned.  |
| Null      | `null`               | Represents no value or empty value.  |
| BigInt    | `1234567890n`        | Represents large integers.           |
| Symbol    | `Symbol('id')`       | Represents unique identifiers.       |
*/

let name = "Mohit"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let address; // Undefined
let emptyValue = null; // Null
let bigNumber = 1234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

// Non-Primitive Types:-

/*
| Data Type | Example                     | Description                         |
| --------- | --------------------------- | ----------------------------------- |
| Object    | `{ name: "John", age: 25 }` | Collection of key-value pairs.      |
| Array     | `[1, 2, 3, 4]`              | Ordered collection of elements.     |
| Function  | `function greet() {}`       | Block of code that can be executed. |
| Date      | `new Date()`                | Represents date and time.           |
*/

let user = { name: "John", age: 30 }; // Object
let colors = ["red", "green", "blue"]; // Array
let greet = function () {
  console.log("Hello");
}; // Function
let today = new Date(); // Date object

// ================================================
// NOTE: The following data types are specific to JavaScript.
// JavaScript supports both primitive and non-primitive (reference) types.
// This classification and behavior (like dynamic typing, type coercion,
// and comparison rules) apply to JavaScript and may vary in other languages.
// ================================================

/*
👉 Type Conversion

Type conversion in JavaScript refers to the process of transforming data from one data type to another.

**Implicit Type Conversion (Type Coercion)**: This happens automatically when JavaScript encounters an operation involving different data types. JavaScript attempts to convert one of the operands to a compatible type to perform the operation.

console.log("5" + 3); // "53" → Number 3 is converted to string and concatenated
console.log("5" - 3); // 2 → String '5' is converted to number automatically
console.log(true + 1); // 2 → true is converted to 1

👉 Type Casting

Involves manually converting a value from one data type to another using built-in functions or operators.

let str = "123";
let num = Number(str); // String to Number
console.log(num); // 123

let n = 456;
let s = String(n); // Number to String
console.log(s); // "456"

let bool = Boolean(0); // 0 is falsy, so it becomes false
console.log(bool); // false

👉 Operators

Operators are special symbols or keywords that are used to perform operations on variables and values.

Types of Operators:-

| Operator Type            | Example Symbols                                |
| ------------------------ | ---------------------------------------------- |
| 1. Arithmetic Operators  | `+`, `-`, `*`, `/`, `%`, `++`, `--`            |
| 2. Assignment Operators  | `=`, `+=`, `-=`, `*=`, `/=`, `%=`              |
| 3. Comparison Operators  | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| 4. Logical Operators     | `&&` (AND), `\` (OR), `!` (NOT)                |
| 5. String Concatenation  | `+` (also used for string joining)             |
| 6. Conditional (Ternary) | `condition ? value1 : value2`                  |
| 7. Type Operators        | `typeof`, `instanceof`                         |
| 8. Bitwise Operators     | `&`, \`, `^`, `\~`, `<<`, `>>`, `>>>\`         |
| 9. Spread/Rest Operators | `...`                                          |

*/

// 1. Arithmetic Operators

let x = 10,
  y = 5;
console.log(x + y); // 15 (Addition)
console.log(x - y); // 5  (Subtraction)
console.log(x * y); // 50 (Multiplication)
console.log(x / y); // 2  (Division)
console.log(x % y); // 0  (Remainder)
console.log(++x); // 11 (Increment)
console.log(--y); // 4  (Decrement)

// 2. Assignment Operators

x += 5; // Same as x = x + 5
console.log(x); // 15

// 3. Comparison Operators

console.log(5 == "5"); // true  (loose equality, type conversion happens)
console.log(5 === "5"); // false (strict equality, no type conversion)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 <= 5); // true

// 4. Logincal Operators

let k = true,
  p = false;

console.log(k && p); // false (AND)
console.log(k || p); // true  (OR)
console.log(!k); // false (NOT)
