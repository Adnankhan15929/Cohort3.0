// javascript
// ======================
// CONSOLE & BASICS
// ======================

console.log("Hello JavaScript");
console.log("Adnan", 20, "Bhopal");
console.warn("This is a warning message");
console.error("This is an error message");
console.table([1, 2, 3, 4, 5]);

// ======================
// VARIABLES
// ======================

let studentName = "Adnan";
console.log(studentName);

let age = 20;
console.log(age);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("Swapped:", a, b);

const PI = 3.14159;
console.log(PI);

let test;
console.log(test);

let score = 50;
score += 10;
console.log(score);

let firstName = "Adnan";
let lastName = "Khan";
let fullName = firstName + " " + lastName;
console.log(fullName);

// ======================
// DATA TYPES
// ======================

let str = "Hello";
let num = 100;
let bool = true;
let empty = null;
let undef;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof empty);
console.log(typeof undef);

let mobile = 9876543210;
console.log(typeof mobile);

let nullvariable = null;
console.log(nullvariable);

let big = 123456789123456789n;
console.log(big);

// ======================
// TYPE CONVERSION
// ======================

console.log(Number("50"));
console.log(String(100));
console.log(Boolean("true"));

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

console.log(Number("123abc"));
console.log(parseInt("500px"));

// ======================
// OPERATORS
// ======================

console.log(10 + 20);
console.log(25 % 4);
console.log(5 ** 2);

let i = 10;
i++;
console.log(i);

let j = 10;
j--;
console.log(j);

let k = 10;
k += 20;
console.log(k);

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

console.log(10 === 10);
console.log("10" == 10);
console.log("10" === 10);

let p = true;
let q = false;

console.log(p && q);
console.log(p || q);
console.log(!p);

// ======================
// STRINGS
// ======================

let js = "JavaScript";

console.log(js.length);
console.log(js.toUpperCase());
console.log(js.toLowerCase());

console.log("I love JavaScript".includes("JavaScript"));

console.log("Hello World".slice(6));

console.log("I like apple".replace("apple", "mango"));

console.log("HTML,CSS,JS".split(","));

console.log("   Hello   ".trim());

console.log("Hi".repeat(5));

console.log(js[0]);

let person = "Aman";
let personAge = 20;
console.log(`My name is ${person} and I am ${personAge} years old`);

// ======================
// NUMBERS & MATH
// ======================

console.log(Math.round(4.7));
console.log(Math.sqrt(81));
console.log(Math.max(10, 20, 5, 99));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(parseInt("99.99"));
console.log(Number.isInteger(25));
console.log((3.141592).toFixed(2));

// ======================
// CONDITIONALS
// ======================

let number = -5;
if (number >= 0) console.log("Positive");
else console.log("Negative");

number = 8;
if (number % 2 === 0) console.log("Even");
else console.log("Odd");

let voterAge = 20;
if (voterAge >= 18) console.log("Eligible to vote");
else console.log("Not eligible");

let n1 = 10;
let n2 = 20;
console.log(n1 > n2 ? n1 : n2);

let x = 10,
  y = 30,
  z = 20;
console.log(Math.max(x, y, z));

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Leap Year");
else console.log("Not Leap Year");

let num1 = 15;
if (num1 % 3 === 0 && num1 % 5 === 0)
  console.log("Divisible by 3 and 5");

let marks = 85;

if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 50) console.log("C");
else console.log("Fail");

let ch = "a";
if ("aeiouAEIOU".includes(ch))
  console.log("Vowel");
else console.log("Consonant");

// Calculator

let numA = 10;
let numB = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(numA + numB);
    break;
  case "-":
    console.log(numA - numB);
    break;
  case "*":
    console.log(numA * numB);
    break;
  case "/":
    console.log(numA / numB);
    break;
  default:
    console.log("Invalid Operator");
}

// Day Name

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
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// Login System

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234")
  console.log("Login Successful");
else console.log("Invalid Credentials");

// ======================
// TRUTHY & FALSY
// ======================

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean([]));

let value = "Hello";
console.log(value ? "Valid" : "Invalid");

// ======================
// TERNARY OPERATOR
// ======================

let evenOdd = 6;
console.log(evenOdd % 2 === 0 ? "Even" : "Odd");

let ageCheck = 20;
console.log(ageCheck > 18 ? "Adult" : "Minor");

let numX = 20;
let numY = 30;
console.log(numX > numY ? numX : numY);

// ======================
// MIXED PRACTICE
// ======================

let bioName = "Adnan";
let city = "Bhopal";
let bioAge = 20;

console.log(`Name: ${bioName}, Age: ${bioAge}, City: ${city}`);

let length = 10;
let width = 5;
console.log("Area:", length * width);

let principal = 1000;
let rate = 5;
let time = 2;
console.log("Simple Interest:", (principal * rate * time) / 100);

let celsius = 25;
console.log("Fahrenheit:", (celsius * 9) / 5 + 32);

let km = 5;
console.log("Meters:", km * 1000);

let total = 400;
console.log("Percentage:", (total / 500) * 100);

let units = 150;
console.log("Electricity Bill:", units * 5);

let userFirst = "adnan";
let birthYear = 2005;
console.log("Username:", userFirst + birthYear);

console.log("JavaScript".startsWith("J"));

let sentence = "Hello World";
console.log(sentence.replaceAll(" ", "").length);

// ======================
// LOGICAL THINKING
// ======================

let num3 = 20;
let num4 = 30;
console.log(num3 > num4 ? num3 : num4);

let between = 25;
console.log(between >= 10 && between <= 50);

let pass = "password123";
console.log(pass.length > 8);

let driverAge = 20;
let hasLicense = true;
console.log(driverAge > 18 && hasLicense);

let divisible = 6;

if (divisible % 2 === 0 && divisible % 3 === 0)
  console.log("Divisible by both");
else if (divisible % 2 === 0)
  console.log("Divisible by 2");
else if (divisible % 3 === 0)
  console.log("Divisible by 3");

let hour = new Date().getHours();

if (hour < 12) console.log("Good Morning");
else if (hour < 18) console.log("Good Afternoon");
else console.log("Good Evening");

let multiple = 50;
console.log(multiple % 10 === 0);

let price = 1000;
let discount = 20;
console.log("Discount Price:", price - (price * discount) / 100);

let stock = true;
console.log(stock ? "In Stock" : "Out of Stock");

let bill = 1000;
let gst = 18;
console.log("Final Bill:", bill + (bill * gst) / 100);

// ======================
// CHALLENGE QUESTIONS
// ======================

// OTP
console.log("OTP:", Math.floor(1000 + Math.random() * 9000));

// Reverse String
let reverse = "cat";
console.log(reverse[2] + reverse[1] + reverse[0]);

// Last Character
let word = "JavaScript";
console.log(word[word.length - 1]);

// Initials
let full = "Adnan Khan";
let arr = full.split(" ");
console.log(
  arr[0][0].toUpperCase() +
  arr[1][0].toUpperCase()
);

// Ignore Case
let s1 = "Hello";
let s2 = "hello";
console.log(s1.toLowerCase() === s2.toLowerCase());

// Login Validation
let user = "admin";
let pass1 = "1234";

if (user && pass1)
  console.log("Login Success");
else
  console.log("Login Failed");

// 2-digit or 3-digit
let digit = 456;

if (digit >= 10 && digit <= 99)
  console.log("2 Digit");
else if (digit >= 100 && digit <= 999)
  console.log("3 Digit");
else
  console.log("Other");

// ATM Balance
let balance = 5000;
console.log("Available Balance:", balance);

// Traffic Light
let light = "red";

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
}

// Marksheet Generator
let m1 = 80;
let m2 = 90;
let m3 = 70;

let totalMarks = m1 + m2 + m3;
let percentage = totalMarks / 3;

console.log("Total:", totalMarks);
console.log("Percentage:", percentage);

if (percentage >= 90)
  console.log("Grade A");
else if (percentage >= 75)
  console.log("Grade B");
else if (percentage >= 50)
  console.log("Grade C");
else
  console.log("Fail");