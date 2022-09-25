// Assign-1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.reverse().slice(-num).sort()); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.reverse().splice(3, 1)
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Assign-2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

// Assign-3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assign-4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// Assign-5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack.indexOf(needle)) {
    console.log("Found");
}

if (haystack.lastIndexOf(needle)) {
    console.log("Found");
}

// Assign-6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort();
allArrs.splice(false, arr2.length);

console.log(allArrs.join('').toLowerCase()); // fxy