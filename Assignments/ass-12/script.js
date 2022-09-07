// ass-1
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}
sayHello("Ahmed", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");

// ass-2
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === "add" || operation === undefined) {
    return firstNum + secondNum
  } else if (operation === "subtract") {
    return firstNum - secondNum;
  } else if (operation === "multiply") {
    return firstNum * secondNum;
  }
  
}
console.log(calculate(20));
console.log(calculate(20, 30));
console.log(calculate(20, 30, 'add'));
console.log(calculate(20, 30, 'subtract'));
console.log(calculate(20, 30, 'multiply'));

// ass-3
function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Your Time In This Life`)
    console.log(`Years: ${theAge}`);
    console.log(`Month: ${theAge * 12}`);
    console.log(`Weeks: ${theAge * 12 * 4}`);
    console.log(`Days: ${theAge * 12 * 4 * 7}`);
    console.log(`Hours: ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Minuets: ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  }
}
ageInTime(9);
ageInTime(17);

// ass-4

// ass-5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2004, 2022);

// ass-6
function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else {
      result *= Math.trunc(numbers[i]);
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000