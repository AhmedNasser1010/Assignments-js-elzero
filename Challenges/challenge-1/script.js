let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+] [+b++] [+] [+c++] [-] [+a++]
  [++a]
  - Value: 11
  - Explain: pre
  [+]
  - Explain: plus
  [+b++]
  - value: 20
  - explain: unary plus and post
  [+]
  - explain: plus
  [+c++]
  - value: 80
  - explain: unary plus and post
  [-]
  - explain: minus
  [+a++]
  - value: 11
  - explain: unary plus and post
*/

/*
  [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
  [++a]
  - value: 13
  - explain: pre
  [+]
  - explain: plus
  [-b]
  - value: -21
  - explain: unary negation
  [+]
  - explain: plus
  [+c++]
  - value: 81
  - explain: unary plus and post
  [-]
  - explain: minus
  [-a++]
  - value: -13
  - explain: minus and post
  [+]
  explain: plus
  [+a]
  - value: 14
  - explain: unary plus
*/

/*
  [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
  [--c]
  - value: 81
  - explain: pre
  [+]
  - explain: plus
  [+b]
  - value: 21
  - explain: unary plus
  [+]
  - explain: plus
  [--a]
  - value: 13
  - explain: post
  [*]
  - explain: multiply
  [+b++]
  - value: 21
  - explain: unary plus and post
  [-]
  - explain: minus
  [+b]
  - value: 22
  - explain: unary plus
  [*]
  - explain: multiply
  [a]
  - value: 13
  [+]
  explain: plus
  [--a]
  - value: 12
  explain: pre
  [-]
  explain: minus
  [+true]
  value: 1
  explain: unary plus
*/