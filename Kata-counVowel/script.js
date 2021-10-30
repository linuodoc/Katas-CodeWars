/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
// console.log(window.performance.now());

const vowels = ["a", "e", "i", "o", "u"];
function getCount(str) {
  var vowelsCount = 0;

  //   //solution:1
  //   console.time("codezup");
  //   str.match(/[a-z]/g).forEach((s) => {
  //     vowels.forEach((vowel) => {
  //       if (s === vowel) vowelsCount++;
  //     });
  //   });
  //   console.timeEnd("codezup");

  //   //solution:2
  //   console.time("codezup");
  //   str.match(/[a-z]/g).forEach((element) => {
  //     for (var i = 0; i < vowels.length; i++) {
  //       if (element === vowels[i]) vowelsCount++;
  //     }
  //   });
  //   console.timeEnd("codezup");

  //solution:3
  console.time("codezup");
  let vowelcount = str.match(/[aeiou]/gi) || [].length;
  console.timeEnd("codezup");

  return vowelsCount;
}

str = "However, there is one edge case. ";
console.log(getCount(str));
