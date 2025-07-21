/* ---------------- TIME SPANCE & COMPLEXITY ------------------- */

/*
🚀 1. What is Time Complexity?

Time Complexity means how much time your algorithm takes to run as the size of input increases.
But we don’t measure in real "seconds", instead we count how many operations it performs.

Example:

function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

If arr has 5 elements → It prints 5 times.
If arr has 100 elements → It prints 100 times.

That means:
➡ Time Complexity = O(n) → n is the number of elements.

💡 Understanding Big O Notation

Big O is used to describe how fast (or slow) an algorithm is as the input size grows.

| Big O Notation | Name              | Meaning (in simple)                                      |
| -------------- | ----------------- | -------------------------------------------------------- |
| O(1)           | Constant Time     | Always takes same time. Doesn’t depend on input size.    |
| O(n)           | Linear Time       | Time increases as input increases.                       |
| O(n²)          | Quadratic Time    | Nested loop = time grows faster                          |
| O(log n)       | Logarithmic Time  | Cuts the problem in half every time (like binary search) |
| O(n log n)     | Linearithmic Time | Good for sorting like Merge Sort                         |

//👉 O(1) - Constant Time

function getFirstItem(arr) {
  return arr[0];
}

//👉 O(n) - Linear Time

function printItems(arr) {
  arr.forEach(item => console.log(item));
}

//👉 O(n²) - Nested Loop = Quadratic

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

//👉 O(log n) - Logarithmic

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

📦 2. What is Space Complexity?

Space Complexity means how much extra memory your algorithm needs.
We only count extra memory, not input size.

Example:

function sum(arr) {
  let total = 0;        // uses 1 space
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];    // just adds to same variable
  }
  return total;
}

✅ Space Complexity = O(1) → Only 1 variable used

function doubleArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2); // stores new values
  }
  return result;
}

📦 Space Complexity = O(n) → We're using extra array of size n.

✅ Key Rules to Remember:

⌚ Time Complexity
- For loop → usually O(n)
- Nested loops → O(n²)
- Binary Search → O(log n)
- Sorting (good ones) → O(n log n)

📦 Space Complexity
- Extra variables = O(1)
- Extra array = O(n)
- Recursive calls = O(n) (because of function call stack)
*/
