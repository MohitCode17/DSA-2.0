/* ---------------- STRING DATA STRUCTURE COMPLETE NOTES ------------------- */

/*
👉 What is a String?

A string is a sequence of characters enclosed in single, double, or backtick quotes.
Strings are IMMUTABLE in JavaScript – you cannot change characters directly.

✅ Examples of creating strings:
let str1 = 'hello';
let str2 = "world";
let str3 = `Template ${str1} ${str2}`; // Template literals (ES6)

✅ Strings can include letters, numbers, symbols, and spaces
let greeting = "Hello, world!";

✅ typeof string
console.log(typeof str1); // "string"


👉 String Properties

| Property   | Description                          | Example         |
| ---------- | ------------------------------------ | --------------- |
| `length`   | Number of characters in the string   | `str.length`    |

let str = "hello";
console.log(str.length); // 5


👉 String Traversal (Looping through characters)

✅ for loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

✅ for...of loop
for (let ch of str) {
  console.log(ch);
}

✅ Access character by index
console.log(str[1]);        // 'e'
console.log(str.charAt(1)); // 'e'


👉 Common String Methods

| Operation             | Method                   | Example                         |
| --------------------- | ------------------------ | ------------------------------- |
| Get character         | `charAt(index)`          | `str.charAt(1)`                 |
| Get ASCII code        | `charCodeAt(index)`      | `str.charCodeAt(0)`             |
| Find index of char    | `indexOf(substring)`     | `str.indexOf('l')`              |
| Last occurrence       | `lastIndexOf()`          | `str.lastIndexOf('l')`          |
| Check inclusion       | `includes()`             | `str.includes('he')`            |
| Starts with prefix    | `startsWith()`           | `str.startsWith('he')`          |
| Ends with suffix      | `endsWith()`             | `str.endsWith('lo')`            |
| Get part of string    | `substring(start, end)`  | `str.substring(1, 4)`           |
| Get part of string    | `slice(start, end)`      | `str.slice(1, 4)`               |
| Convert to upper      | `toUpperCase()`          | `str.toUpperCase()`             |
| Convert to lower      | `toLowerCase()`          | `str.toLowerCase()`             |
| Remove whitespace     | `trim()`                 | `'  hi  '.trim()`               |
| Replace value         | `replace(old, new)`      | `str.replace('lo', 'ya')`       |
| Repeat string         | `repeat(n)`              | `'ha'.repeat(3)` => 'hahaha'    |
| Convert to array      | `split(separator)`       | `'a-b-c'.split('-')` => ['a','b','c'] |

Examples:

"hello".indexOf("l");         // 2
"hello".lastIndexOf("l");     // 3
"hello".includes("he");       // true
"hello".startsWith("he");     // true
"hello".endsWith("lo");       // true
"hello".slice(1, 4);          // "ell"
"hello".substring(1, 4);      // "ell"
"  hello  ".trim();           // "hello"
"hello".replace("lo", "p!");  // "help!"


👉 Converting String to Array and Back

let word = "hello";
let arr = word.split(""); // ['h', 'e', 'l', 'l', 'o']
let joined = arr.join(""); // 'hello'


👉 String Reverse (Using Array Trick)

let original = "hello";
let reversed = original.split("").reverse().join(""); // "olleh"


👉 Case Conversion

let name = "Mohit";
console.log(name.toUpperCase()); // "MOHIT"
console.log(name.toLowerCase()); // "mohit"


👉 Useful Patterns for DSA

// ✅ Count character frequency
let s = "hello";
let freq = {};
for (let ch of s) {
  freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq); // { h:1, e:1, l:2, o:1 }

✅ Palindrome check
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

✅ Anagram check
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

✅ Compare two strings lexicographically
console.log("apple" < "banana"); // true

✅ Remove duplicate characters
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
removeDuplicates("aabbcc"); // "abc"

✅ Convert string to character array manually
let charArray = [];
for (let i = 0; i < str.length; i++) {
  charArray.push(str[i]);
}


👉 Interview Tricks & Must-Know Concepts

1. Strings are immutable – all methods return a NEW string.
2. Use split/reverse/join for reversing.
3. Use hash maps (objects) to count frequency.
4. Learn how to use 2 pointers for problems like reverse words, check palindrome, etc.
5. Use slice/substring/split to manipulate portions of strings.
6. Sorting string characters helps with anagrams.
7. `charCodeAt()` helps in alphabetical problems (like checking if letters are consecutive).


✅ Template Literals (Modern JS, ES6)

let firstName = "Mohit";
let lastName = "Gupta";
let full = `${firstName} ${lastName}`;
console.log(full); // "Mohit Gupta"


👉 Bonus: Convert between char and ASCII

✅ Char -> ASCII
console.log("A".charCodeAt(0)); // 65

✅ ASCII -> Char
console.log(String.fromCharCode(65)); // "A"

*/
