// ass-1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "A";
let i = counter

while (counter < friends.length) {
  counter++;
  if (typeof friends[counter] === 'number') {
    continue;
  } else if (friends[counter][index].startsWith(letter)) {
    continue;
  } else {
    i++
    console.log(`${i} => ${friends[counter]}`);
  }
}

// for (; counter < friends.length; counter++) {
//   if (typeof friends[counter] === 'number') {
//     continue;
//   } else if (friends[counter][index].startsWith(letter)) {
//     continue;
//   } else {
//     i++
//     console.log(`${i} => ${friends[counter]}`);
//   }
// }