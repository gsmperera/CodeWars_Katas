console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
const binaryArrayToNumber = (arr) => {
  const bin = arr.join("");
  return parseInt(bin, 2);
};

// More Solutions

// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// const binaryArrayToNumber = arr => {
//     return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// }

//Tests
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
