// ass-1
let start = 10;
let end = 100;
let exclude = 40;
let i = start;

for (start; start <= end; start += i) {
  if (start === 40) {
    continue;
  }
  console.log(start);
}

// ass-2
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; start2 >= stop; start2--) {
  if (start2 < i) {
    console.log('0' + start2);
  } else {
    console.log(start2);
  }
}

// ass-3
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (; start3 <= end3; start3++) {
  console.log(start3);
  for (i = breaker; i <= breaker + breaker; i +=breaker) {
    console.log("-- " + i);
  }
}

// ass-4
let index = 10;
let jump = 2;
let end4 = 0;

for (;;) {
  let i = jump;
  console.log(index);
  if (index === (i + i)) {
    break;
  }
  index -= jump
}

// ass-5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let j = letter.length -letter.length
for (let i = letter.length -letter.length; i < friends.length; i++) {
  if (friends[i][j].startsWith(letter.toUpperCase())) {
    continue;
  } else {
    console.log(`${i} => ${friends[i]}`);
  }
}

// ass-6
let start4 = 0;
let swappedName = "elZerO";
let swapped = "";

for (i = start4; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    swapped += swappedName[i].toUpperCase()
  } else if (swappedName[i] === swappedName[i].toUpperCase()) {
    swapped += swappedName[i].toLowerCase()
  }
}
console.log(swapped);

// ass-7
// let start5 = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start5; i < mix.length; i++) {
//   if (typeof mix[i] === 'string') {
//     continue;
//   }
//   console.log(mix[i]);
// }