// Assign-1
console.log(100000);				    // 100000
console.log(100_000); 					// 100000
console.log(5e4 + 5e4);				    // 100000
console.log(Number("100000")); 			// 100000
console.log(1e5); 						// 100000
console.log(10 ** 5);				    // 100000
console.log(100000.0); 					// 100000
console.log(Math.round(99999.9)); 		// 100000
console.log(Math.max(100000, 1, 2, 3)); // 100000
console.log(Math.trunc(100000.9)); 		// 100000

// Assign-2
let a = Number.MIN_SAFE_INTEGER
console.log(-a);

// Assign-3
console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
  Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER +
	Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER);

// Assign-4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.56

// Assign-5
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Assign-6
let flt = 10.4;
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed()); // 10

// Assign-7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4