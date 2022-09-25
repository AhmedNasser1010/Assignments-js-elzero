// Assign-1
// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
  console.log('00' + num1);
}

// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
  console.log('0' + num2);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
  console.log(num3);
}

console.log('---------');

// Assign-2
let numOne = 9;
let str = "9";
let str2 = "20";

if (numOne === +str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (numOne == str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (numOne !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str !== str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

console.log('---------');

// Assign-3
let A1 = 10;
let A2 = 30;
let A3 = "30";

if (A3 > A1 && A3 !== A2 && A3 > A1 && A3 == A2 && A3 !== A1 && A3 !== A2) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
  console.log("{A3} Value And Type Is Not The Same As {a1} And Type Is Not The Same As {A2}");
}

console.log('---------');

// Assign-4
// Edit What You Want Here

let B1 = 10;
let B2 = 1;
let B3 = 10;
let B4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (B1 > B2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (B1 > B2 && B1 < B4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (B1 > B2 && B1 === B3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((B1 + B2) < B4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((B1 + B3) < B4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((B1 + B2 + B3) < B4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (B4 - (B1 + B3) + B2 === 21) {
  console.log("True");
} else {
  console.log("False");
}