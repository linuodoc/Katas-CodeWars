"use strict";

/*
1) We search non-negative integer numbers, 
2) with at most 3 digits, 1 digit OR 2 digits or MAx 3 Digits 
3) such as the sum of the cubes of their digits is the number itself; we will call them "cubic" numbers. !!

- s = "aqdf&0#1xyz!22[153(777.777" 
the groups of at most 3 digits are 0 and 1(one digit), 22(two digits), 153, 777, 777(3 digits)
Only 0, 1, 153 are cubic and their sum is 154
Return: "0 1 153 154 Lucky"

- s = "QK29a45[&erui9026315"
the groups are 29, 45, 902, 631, 5. None is cubic.
  Return: "Unlucky" */

// 153 is such a "cubic" number: 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153

//number1 number2 (and so on if necessary) sumOfCubicNumbers Lucky

// numbStr = [0, 1, 22 ,153 , 777 , 777]
//EXPECTED RESULTS test
// Expected: '0 1 153 Lucky', instead got: ' 0'
// Expected: 'Unlucky', instead got: ''

// s = "aqdf&0#1xyz!22[153(777.777";
// s = 'QK29a45[&erui 0 9026315';
// s = '&z371 upon 407298a --- dreary, ###100.153';
// s = 'QK29a45[&erui9026315[153';
// s = "0 9026315 -827&()";
s = "abc445 & 407194a time198?/!407381Once upon62xyz370174abc85Once upon153238";
// s = "a time70?/!Once upon90xyzxyz391 &";
// s = "aqdf&01xyz153777.777";
// s = "000.001 0jhf0ghf1jh234 0 1 001 0, hn0mlg0 000153";
// s = "9026315 -827&()";
console.log(s);

//   let arr = [];
//   let numb = s.match(/\d{1,3}?!(\.\d+)?/g);
//   // let numb = s.match(/[^\d.-]?/g)
//   // let numb = s.match(/\d+(? !\.) /g)
//   // let numb = s.match(/\d{1,3}([,.]\d+)?/g)
//   // let numb = s.match(/\d{1,3}(.d+)?/g)
//   // let numb = s.match(/\d{1,3}[\.d]?/g)
//   // let numb = s.match(/(?: \.\d+)? )
//   console.log('string:', numb);

//   for (var i = 0; i < numb.length; i++) {
//     arr.push(Number(numb[i]));
//   }
//   console.log('converted to numbers:', arr);

//   for (var i = 0; i < arr.length; i++) {
//     if (Number.isInteger(arr[i])) {
//       // console.log(arr[i],'-')
//       let str = arr[i].toString();
//       console.log(str, '--integer Number--');

//       if (str.length > 1) {
//         let total = 0;
//         for (var j = 0; j < str.length; j++) {
//           let cubic = Number(str[j]) ** 3;
//           total += cubic;
//           console.log(str[j], 'digit');
//           console.log(cubic, 'cubic');
//         }
//         console.log(total, 'total');
//         checkCube(total, Number(str));
//       } else {
//         cubic = Number(str) ** 3;
//         total = cubic;
//         console.log(str, 'digit');
//         console.log(cubic, 'cubic');
//         console.log(total, 'total');
//         checkCube(total, Number(str));
//       }

//       // if (str[j] === total) {
//       // console.log(typeof (str[j]))
//       // }
//     }
//   }

//   function checkCube(total, number) {
//     if (total === number) console.log('it is a cube number');
//   }

//   // console.log(isNaN('a'))
//   // console.log(isNaN('5'))
//   // console.log(Number.isInteger('a'))
//   // console.log(Number.isInteger(5))
//   // console.log(Number.isInteger(5.5))
// }

// let numbStr = s.match(/\d{1,3}(?![\.\d+])?/g);
// console.log('Number String:', numbStr);

// for (var i = 0; i < numbStr.length; i++) {
//   console.log(numbStr[i], '-- Number--');
//   if (numbStr[i].length > 1) {
//     let total = 0;
//     let str = numbStr[i];
//     for (var j = 0; j < str.length; j++) {
//       let cubic = Number(str[j]) ** 3;
//       total += cubic;
//       console.log(str[j], 'digit');
//       console.log(cubic, 'cubic');
//     }
//     console.log(total, 'total');
//     checkCube(total, Number(numbStr[i]));
//   } else console.log(`${numbStr[i]}, is a Cubic Number`);
//   //   {
//   //     cubic = Number(numbStr[i]) ** 3;
//   //     total = cubic;
//   //     console.log(numbStr[i], 'digit');
//   //     console.log(cubic, 'cubic');
//   //     console.log(total, 'total');
//   //     checkCube(total, Number(numbStr[i]));
//   //   }
// }
// function checkCube(total, numbStrer) {
//   if (total === numbStrer) console.log('it is a cube numbStrer');
// }

// let numb = s.match(/\d{1,3}(?![\.\d+])?/g);
// console.log('Number String:', numb);

// function hiddenCubic(numbStr) {
//   let arrNum = [];
//   for (var i = 0; i < numbStr.length; i++) {
//     if (numbStr[i].length > 1) {
//       let total = 0;
//       let str = numbStr[i];
//       for (var j = 0; j < str.length; j++) {
//         let cubic = Number(str[j]) ** 3;
//         total += cubic;
//         if (total === Number(numbStr[i])) arrNum.push(Number(numbStr[i]));
//       }
//     } else arrNum.push(Number(numbStr[i]));
//   }
//   return (total === Number(numbStr[i]) ? `${numbStr[i]} "Lucky" : "Unlucky" `
// }

// function isSumOfCubes(s) {
//   let numbArr = s.match(/\d{1,3}(?![\.\d+])?/g);
//   console.log(numbArr);
//   let lucky = "";
//   let totcubics = 0;
//   for (var i = 0; i < numbArr.length; i++) {
//     sum = 0;
//     for (var j = 0; j < numbArr[i].length; j++) {
//       let str = numbArr[i];
//       let cubic = Number(str[j]) ** 3;
//       sum += cubic;
//     }
//     console.log(sum);
//     if (sum === Number(numbArr[i])) {
//       `${(lucky += " " + numbArr[i])}`;
//       totcubics = totcubics + Number(numbArr[i]);
//     }
//   }
//   return lucky ? `${lucky} ${totcubics} Lucky` : "Unluckly";
// }
// console.log(isSumOfCubes(s));

function isSumOfCubes(s) {
  let numbArr = s.match(/\d{1,3}(?![\.\d+])?/g);
  console.log(numbArr);
  let lucky = [];
  for (var i = 0; i < numbArr.length; i++) {
    sum = 0;
    for (var j = 0; j < numbArr[i].length; j++) {
      let str = numbArr[i];
      let cubic = Number(str[j]) ** 3;
      sum += cubic;
    }
    if (sum === Number(numbArr[i])) lucky.push(Number(numbArr[i]));
  }
  let sumcubics = lucky.reduce((a, b) => a + b, 0);

  return lucky.length === 0
    ? "Unluckly"
    : `${lucky.join(" ")} ${sumcubics} Lucky`;
}
console.log(isSumOfCubes(s));
