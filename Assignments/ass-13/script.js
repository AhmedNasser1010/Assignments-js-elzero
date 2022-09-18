// ass-1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.slice(0, zName.indexOf(" "));
    let LName = zName.slice(zName.indexOf(" "), zName.length);
    let lName = `${LName.slice(0, 2)}.`;
    return `${fName}${lName}`;  
  }
  function ageWithMessage(zAge) {
    let num = zAge.match(/\d+/)[0];
    return `Your Age Is ${num}`;
  }
  function countryTwoLetters(zCountry) {
    let countary = zCountry.slice(0, 2).toUpperCase();
    return `Your Live In ${countary}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Syria"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed Nasser", "17 Is The Age", "Egypt"));
// Hello Ahmed N., Your Age Is 17, You Live In EG

// ass-2
// function itsMe() {
//   return `Iam A Normal Function`;
// }
let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ass-3
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) =>
  status = (status) =>
    salary = (salary) =>
      status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ass-4
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings