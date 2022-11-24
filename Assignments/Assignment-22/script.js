// Assign-1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g));

// Assign-2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/Os\d*O/g));

// Assign-3
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/g));

// Assign-4
let rex = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Assign-5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d+(\s)?(\/)?(-)?(\s)?\d+(\/)?(\s)?(-)?(\s)?\d+/g;

console.log(date1.match(re));
console.log(date2.match(re));
console.log(date3.match(re));
console.log(date4.match(re));

// Assign-6 [Challange]
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let rea = /(http(s)?:\/\/(www\.)?)?\w+\.org(:\d{4}\/.+)?/g;

console.log(url1.match(rea));
console.log(url2.match(rea));
console.log(url3.match(rea));
console.log(url4.match(rea));
console.log(url5.match(rea));