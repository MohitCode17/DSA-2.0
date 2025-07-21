/* -------- ARRAY DATA STRUCTURE ------------------------------------------ */

/*
👉 What is Array ?

An array is a linear data structure that holds an ordered collection of elements. In JavaScript, arrays are dynamic and can hold mixed data types.

Key Properties:

| Property | Description                     | Example      |
| -------- | ------------------------------- | ------------ |
| `length` | Number of elements in the array | `arr.length` |


let arr = [1, 2, 3];
console.log(arr.length); // 3

👉 Array Traversal (Loops)

✅ for loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

✅ for...of loop

for (let num of arr) {
  console.log(num);
}

👉 Common Array Operations

| Operation         | Method       | Example           |
| ----------------- | ------------ | ----------------- |
| Add to end        | `push()`     | `arr.push(4)`     |
| Remove from end   | `pop()`      | `arr.pop()`       |
| Add to start      | `unshift()`  | `arr.unshift(0)`  |
| Remove from start | `shift()`    | `arr.shift()`     |
| Find index        | `indexOf()`  | `arr.indexOf(2)`  |
| Check element     | `includes()` | `arr.includes(3)` |

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]

👉 Important Methods for DSA

✅ slice(start, end)

arr = [1, 2, 3, 4];
let subArray = arr.slice(1, 3); // [2, 3]

✅ splice(start, deleteCount, ...items)

arr = [1, 2, 3, 4];
arr.splice(1, 2); // arr = [1, 4]

✅ reverse()

arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]

✅ sort()

arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // [1, 2, 3, 4]

✅ map()

arr = [1, 2, 3];
let squared = arr.map((x) => x * x); // [1, 4, 9]

✅ filter()

arr = [1, 2, 3, 4];
let even = arr.filter((x) => x % 2 === 0); // [2, 4]

✅ reduce()

arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0); // 10
*/

/************ PRACTISE QUESTIONS **************************************************************************************/

// Q.1 Calculate the sum of n numbers of an array.
function sumOfArrayElements(arr) {
  if (arr.length === 0) return "Array cannot be a blank.";

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// console.log(sumOfArrayElements([1, 2, 3, 4, 5]));
// console.log(sumOfArrayElements([10, 20, 30, 40, 50]));
// console.log(sumOfArrayElements([1, 9]));

// Q.2 Reverse an array, Eg:- [1,2,3] -> [3,2,1]
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }

  return arr;
}

// console.log(reverseArray([5, 1, 8, 3, 7]));

// Q.3 Find the min and max element in the array.
function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

// console.log(getMinMax([3, 2, 1, 56, 10000, 167]));
// console.log(getMinMax([10]));
