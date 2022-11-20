// Assign-1
let newSet = new Set().add(10);
newSet.add(20).add(newSet.size);
console.log(newSet);
let [ , , last] = newSet;
console.log(last);

// Assign-2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());

// Assign-3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map = new Map(Object.entries(myInfo));

console.log(map);
console.log(map.size);
console.log(map.has("role"));

// Assign-4
// let theNumber = 100020003000;
// console.log(+Array.from(new Set([...theNumber.toString()])).sort().splice(+true).join(""))

// Assign-5
let theName = "Elzero";
console.log(Array.from(theName));
console.log(theName.split(""));
console.log([...theName]);
console.log();
console.log();

// Assign-6
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
let all = numsOne;
all.push(...numsTwo)
console.log(all);