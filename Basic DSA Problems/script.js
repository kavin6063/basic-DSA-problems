//LARGEST NO IN ARR

// let largest = arr[0];
// let length = arr.length;

// for (let i = 1; i < length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }

// return console.log(largest);

// SMALLEST NO IN ARR

// let smallest = arr[0];

// let length = arr.length;

// for (let i = 1; i < length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

// return console.log(smallest);

// 2ND LARGEST NO IN ARR
// const arr = [3, 5, 1, -7, 8, 6, 74, 9, 22];

// let largest = arr[0];
// let length = arr.length;

// for (let i = 1; i < length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

// let secondLargest = arr[0];

// for (let i = 1; i < length; i++) {
//   if (arr[i] < largest && arr[i] > secondLargest) {
//     secondLargest = arr[i];
//   }
// }

// return console.log(secondLargest);

// 2ND SMALLEST NO IN ARR
// const arr = [3, 5, 1, 7, 8, 6, 74, 9, 22];

// let smallest = arr[0];
// let length = arr.length;

// for (let i = 1; i < length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

// let secondSmallest = arr[0];

// for (let i = 1; i < length; i++) {
//   if (arr[i] > smallest && arr[i] < secondSmallest) {
//     secondSmallest = arr[i];
//   }
// }

// return console.log(secondSmallest);

// REVERSE AN ARRAY

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }

// return console.log(arr);

// duplicate in array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       return console.log(arr[i]);
//     }
//   }
// }

// return console.log("no duplicates");

// Permutaon of string

// let str = "abc";

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < str.length; j++) {
//     for (let k = 0; k < str.length; k++) {
//       console.log(str[i] + str[j] + str[k]);
//     }
//   }
// }

// return

// console.log("No Permutation");

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       for (let l = k + 1; l < arr.length; l++) {
//         for (let m = l + 1; m < arr.length; m++) {
//           console.log(arr[i], arr[j], arr[k], arr[l], arr[m]);
//         }
//       }
//     }
//   }

// Reverse a string

// const str = "hello";

// const reverseFn = (str) => {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// console.log(reverseFn(str));

// Longest Word in Sentence

// const LargestWordfn = (Sentence) => {
//   const words = Sentence.split(" ");
//   let longestword = "";

//   for (let word of words) {
//     if (word.length > longestword.length) {
//       longestword = word;
//     }
//   }
//   return longestword;
// };

// console.log(LargestWordfn("my name is kavin"));

//  palinmdrome

// const str = "racecar";

// const palindrome = (str) => {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   if (reversed === str) {
//     return "palindrome ";
//   } else {
//     return "not plaindrome";
//   }
// };

// console.log(palindrome(str));

// Remove duplicate from array

// let arr = [1, 1, 2, 2, 4, 6, 7, 4, 0];

// function removeDuplicate(arr) {
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicate(arr));

//  Anagrams

// const str1 = "listen";
// const str2 = "silent";

// function Customsort(arr) {
//   const len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
