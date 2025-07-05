/************* PRACTISE SET - 01 ************************************************/

// Q.1 Find the factors of a number.
// Q.2 Find if a number is a prime number.
// Q.3 Calculate the Sum of a digit. E.g. 321 = 3+2+1 = 6
// Q.4 Reverse a number. E.g. 123 = 321, 585 = 585
// Q.5 Check if a number is a strong number. 145 = 1! + 4! + 5! = 145 === 145 true, else false.

// Ans-1
function findFactors(n) {
  if (n === 0) return "0 has infinitely many factors.";

  let facotrs = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      facotrs.push(i);
    }
  }

  return facotrs;
}

// console.log(findFactors(12));
// console.log(findFactors(9));

// Ans-2
function isPrime(n) {
  if (n <= 1) return false; // 1 is not a prime number.
  if (n === 2) return true; // 2 is a prime number.
  if (n % 2 === 0) return false; // Even number is not a prime number

  for (let i = 3; i <= n; i += 2) {
    if (i % 2 === 0) return false;
  }

  return true;
}

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(12));
// console.log(isPrime(18));

// Ans-3
function sumOfDigit(n) {
  if (n < 0) return "Number should be a positive integer.";
  if (n >= 0 && n < 10) return n;

  let sum = 0;

  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

// console.log(sumOfDigit(321));
// console.log(sumOfDigit(125));

// Ans-4
function reverseNumber(n) {
  if (n < 0) return "Number should be a positive integer.";
  if (n >= 0 && n < 10) return n;

  let reverse = 0;

  while (n !== 0) {
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
  }

  return reverse;
}

// console.log(reverseNumber(321));
// console.log(reverseNumber(921));
// console.log(reverseNumber(121));

// Ans-5
function isStrongNumber(n) {
  if (n < 0) return "Number should be a positive integer.";

  let copy = n;
  let sum = 0;

  while (n !== 0) {
    let rem = n % 10;
    let fact = 1;

    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }

    sum += fact;

    n = Math.floor(n / 10);
  }

  return copy === sum ? true : false;
}

// console.log(isStrongNumber(145));
// console.log(isStrongNumber(146));
