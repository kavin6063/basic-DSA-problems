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
const arr = [3, 5, 1, -7, 86, 6, 54, 9, 22];

let largest = arr[0];
let length = arr.length;

for (let i = 1; i < length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

let secondLargest = arr[0];

for (let i = 1; i < length; i++) {
  if (arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

return console.log(secondLargest);
