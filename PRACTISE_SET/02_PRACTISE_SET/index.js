/************* PRACTISE SET - 02 ************************************************/

// Q.1 Find the maximum element of an array.
// Q.2 Find the second maximum element of an array.
// Q.3 Segregate 0s and 1s and moves all 0's to start of the array. / Segregate 0s and 1s and moves all 0's to end of the array.
// Q.4 Given an array, rotate the array by one position in clock-wise direction. E.g:- [1, 2, 3, 4, 5] -> [5, 1, 2, 3, 4]
// Q.5 Rotate array by k element. E.g:- [1, 2, 3, 4, 5] k = 2 -> [3, 4, 5, 1, 2]

// Ans-1
function findMax(arr) {
  if (arr.length === 0) return "Array cannot be a blank.";

  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

// console.log(findMax([5, 1, 8, 3, 7]));
// console.log(findMax([519, 10, 88, 33, 782]));

// Ans-2
function findSecondMax(arr) {
  if (arr.length < 2) return "Array length should be more than 2";

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// console.log(findSecondMax([5, 1, 8, 3, 7]));
// console.log(findSecondMax([519, 10, 88, 33, 782]));

// Ans-3
function moveZerosToStart(arr) {
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j++;
    } else {
      i++;
    }
  }

  return arr;
}

// console.log(moveZerosToStart([1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0]));

function moveZerosToEnd(arr) {
  let i = 0,
    j = 0;

  while (i < arr.length) {
    if (arr[i] === 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
      j++;
    } else {
      i++;
    }
  }

  return arr;
}

// console.log(moveZerosToEnd([1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0]));

// Ans-4
function rotateArrayClockWise(arr) {
  let n = arr.length;
  let copy = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = copy;

  return arr;
}

// console.log(rotateArrayClockWise([1, 2, 3, 4, 5]));

// Ans-5
function rotateArrayByK(arr, k) {
  // 1. Reverse whole array
  // 2. Reverse first n - k elements
  // 3. Reverse last k elements

  let n = arr.length;
  k = k % n; // Handle if k > n

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return arr;
}

console.log(rotateArrayByK([1, 2, 3, 4, 5], 2));
console.log(rotateArrayByK([1, 2, 3, 4, 5], 4));
