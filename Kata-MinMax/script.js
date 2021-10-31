//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
/*
Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// let Str = "1 2 3 4 5";
// let arr = [1, 5, 9, 2, 10];
// console.log(Str.match(/\S/g));

// console.log(`${Math.max(...arr)} ${Math.min(...arr)}`);
// Str.match(/\S/g).forEach((element, index) => {
//   if (element == 1) console.log("found");
// });

// Str.array.forEach((element) => {
//   console.log(element);
// });

// num = "5";
// console.log(typeof num);
// console.log(+num);
// console.log(typeof num);

function highAndLow(str) {
  let myArr = str.split(" ").map((x) => +x);
  return `${Math.max(...myArr)} ${Math.min(...myArr)}`;
}
console.log(highAndLow("1 2 3 4 5")); // return "5 1"
