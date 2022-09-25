// Assign-1
// Create Your Object Here
let member = {
  name: "Ahmed",
  age: 17,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Ahe Is ${this.age}, I Live In ${this.country}.`
  }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log(`--------------------`);
// Assign-2
// Method One
// Create Your Object Here
let objMethodOne = {property: "One"};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({property: "Two"});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let obj = {property: "Three"};
let objMethodThree = Object.create(obj);

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objTwo = {property: "Four"};
let objMethodFour = Object.assign(objTwo);

console.log(objMethodFour.property); // "Method Four"

console.log(`--------------------`);
// Assign-3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign(a = {a: a}, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/