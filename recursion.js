"use strict";

// function countsSheepDown(num) {
//   // base case

//   if (num === 0) {
//     // console.log('No sheep left!');
//     return;
//   }
//   // recursive case
//   // console.log(`${num} - another sheep jumped over the fence`);
//   return `${countsSheep(num - 1)} - another sheep jumped over the fence`;
// }
// countsSheepDown(10);

// function countsSheep(num) {
//   const STOP = num;
//   if (counter === STOP) {
//     return;
//   }
//   console.log(counter);
//   console.log(`${counter} sheep jumps over the fence `);
//   countsSheep(counter++, num);
// }

// countsSheep(3);

// Problem Two: Doubles Array

// what is the input to the program: arr
// what is the output of the program: array with all numbers doubled
// what is the input to each recursive calls: array except for the first or last item of the array
// what is the output of each recursive calls: the array of the doubled items

// function doublesArray(arr) {
//   // base case
//   if (!arr.length) {
//     return [];
//   }
//   // recursive case
//     let firstItem = arr[0]
//     return [firstItem*2, ...doublesArray(arr.slice(1))]
// }

// console.log(doublesArray([1,2,3,4,5]));

//Problem 3: Reverse String
// what is the input to the program: string
// what is the output of the program: reversed string
// what is the input to each recursive calls:string minus the last one
// what is the output of each recursive calls: characters in reverse order

// reversesString= (str) => {
//   // base case
//  if (str === '') {
//     return "";
//   }
//   //recursive case
//   return str.slice(-1) + reversesString(str.slice(0, str.length-1));
// }
// console.log(reversesString('hi i\'m Evan'));

//Problem 4: nth Triangular Number
// what is the input: num
// what is the output: triangularNumber
// what is the input to each recursive calls:n-1
// what is the output of each recursive calls: triangular(n)

const triangularNumber = num => {
  // base case
  if (num === 0) {
    return 0;
  }
  // recursive case
  return num + triangularNumber(num - 1);
};
// console.log(triangularNumber(1));
// console.log(triangularNumber(9)); // 3
// tri 1 = 1
// tri of 2 = 2 + tri(1)
// tri of 3 = 6 = 3 + tri(2)
// tri of 4 = 10 = 4 + tri(3)

// Problem 5: String splitter
// what is the input: separator
// what is the output: an array of all characters from initial except for separators
// what is the input to each recursive calls: all characters present after a discovered separator
// what is the output of each recursive calls: array of strings, without separators

const stringSplitter = (str, separator) => {
  // base case
  // recursive case
  if (str.indexOf(separator) === -1) {
    return [str];
  }

  let strSegment = str.slice(0, str.indexOf(separator));

  str = str.slice(str.indexOf(separator) + separator.length);
  return [strSegment, ...stringSplitter(str, separator)];
};

// console.log(stringSplitter('I love to type', 'o'));

// stringSplitter = (str, separator) => {
//   let results = [];
//   // base case
//   // recursive case
//   while (true) {
//     if (str.indexOf(separator) === -1) {
//       break;
//     }

//     let strSegment = str.slice(0, str.indexOf(separator))
//     results.push(strSegment);
//     str = str.slice(str.indexOf(separator) + separator.length);
//   }

//   results.push(str);

//   return results;

// }

// Problem 6: Binary Representation
// what is the input: num in base 10
// what is the output: num in base 2
// what is the input to each recursive calls:
// what is the output of each recursive calls:

const toBinary = num => {
  // base case
  if (num === 0) {
    return "";
  }
  // recursive case
  let binaryRemainder = num % 2;
  return toBinary(Math.floor(num / 2)) + binaryRemainder;
};

// console.log(toBinary(7));
// what is the input:
// what is the output:
// what is the input to each recursive calls:
// what is the output of each recursive calls:

/**
 * @function fib
 * @desc a fibonacci sequence generator
 * @param {number} num - the number up to which the sequence must count
 * @returns the fibonacc sequence up to a given num
 *  
 */

 // iffy notes
const fibon = (function() {
  const memo = {};

  const f = (n) => {
    let value; 

    if (n in memo) {
      value = memo[n];
    }
    else {
      if (n === 0 || n === 1) {
        value = n;
      }
      else {
        value = f(n - 1) + f(n - 2);
      }

      memo[n] = value;
    }
    return value;
  };
  return f;
})();

console.log(fibon(7));

// const fib = (num) => {
//   // base case
//   if (num <= 0) {
//     return 0;
//   }
//   if (num <= 2) {
//     return 1;
//   }
//   // recursive case
//   return fib(num-1) + fib(num-2);
// };

// console.log(fib(7));