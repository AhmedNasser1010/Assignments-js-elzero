// Assign-2
document.write('<h1>Elzero</h1>');
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'Arial';

// Assign-3
console.log('%cElzero %cWed %cSchool', 'color: red; font-size: 40px;', 'color: green; font-weight: bold; font-size: 40px;', 'color: white; background-color: blue; font-size: 40px;');

// Assign-4
console.group('Group 1');
console.log('Message One');
console.log('Message Two');
console.group('Child Group');
console.log('Message One');
console.log('Message Two');
console.group('Grand Child Group');
console.log('Message One');
console.log('Message Two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log('Message One');
console.log('Message Two');

// Assign-5
console.table(['one', 'two', 'three', 'four', 'five']);

// Assign-6
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/