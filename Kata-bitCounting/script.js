"use strict";

//The binary representation of 1234 is 10011010010,
//so the function should return 5 in this case

// 1) input a non-negative number
// 2) convert the number to binary base 2
// 3) count && retrun the number of 1's in the binary number

// let countBits = function (n) {
//   let count = 0;
//   let bin = num.toString(2);
//   for (var i = 0; i < bin.length; i++) {
//     if (bin[i] == 1) count++;
//   }
//   return count;
// };

// let num = 1234;
// console.log(countBits(num));

let countBits = (n) => n.toString(2).split("0").join("").length;
console.log(countBits(1234));
