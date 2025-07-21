/* -------- PATTERN PROGRAMMING ------------------------------------------ */

/*
👉 What is Pattern Programming?

Pattern Programming refers to writing code that prints specific shapes or arrangements of characters, symbols, or numbers in the console.
It’s commonly used in beginner coding exercises to improve logic-building, nested loops understanding, and flow control.

👉 How to Solve Pattern Problems (Step-by-Step)

✅ General Approach:

1. Understand the number of rows and columns.
2. Focus row by row: What needs to be printed on each row? Don’t think about the whole pattern at once.
3. Figure out spaces and characters separately.
4. Use nested loops:
  1. Outer loop → rows
  2. Inner loop → columns (characters or spaces)

*/

/************ PRACTISE QUESTIONS **************************************************************************************/

// 👉 Print a Square Pattern

/*
 *****
 *****
 *****
 *****
 *****
 */

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}

// 👉 Print a Right-Angled Triangle Pattern

/*
 *
 **
 ***
 ****
 */

for (let i = 1; i <= 4; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 👉 Number Triangle Pattern

/* 
1
12
123
1234
*/

for (let i = 1; i <= 4; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += j;
  }

  console.log(row);
}

// 👉 Alphabet Triangle Pattern

/* 
A
AB
ABC
ADCD
*/

for (let i = 1; i <= 4; i++) {
  let row = "";
  let ascii = 65;

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(ascii);
    ascii++;
  }

  console.log(row);
}

// 👉 Inverted Right Angle Triangle

/*
 ****
 ***
 **
 *
 */

for (let i = 4; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// 👉 Mirror Right Angle Triangle

/*
 *
 **
 ***
 ****
 */

// n(number of row) = 4
// spaces = n - i(current row number)
// star = i(current row number)

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  // Spaces(cols wise)
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  // Star(cols wise)
  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}
