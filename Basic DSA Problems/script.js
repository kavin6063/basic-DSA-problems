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
