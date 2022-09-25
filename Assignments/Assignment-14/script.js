// Assign-1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let justString = mix.map(function (e) {
  return isNaN(parseInt(e)) ? e : "";
}).reduce(function (a, e) {
  return `${a}${e}`
});
console.log(justString);
// Elzero

// Assign-2
let myString = "EElllzzzzzzzeroo";

let string = myString.split("").filter(function (e, i) {
  return myString.indexOf(e) === i;
}).join("");
console.log(string);
// Elzero

// Assign-3
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let num = numsAndStrings.filter(function (e) {
  return !isNaN(e);
}).map(function(e) {
  return -e;
})
console.log(num);
// [-1, -10, 10, 20, -5, -3]