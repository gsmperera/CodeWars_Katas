console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
const findSmallestInt = (args) => args.reduce((p, n) => (p < n ? p : n));

// More Solutions
// const findSmallestInt = args => Math.min(...args);
// const findSmallestInt = args => args.sort((a, b) => a-b)[0];

//Tests
console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([78, 56, 232, 412, 228]));
console.log(findSmallestInt([78, 56, 232, 12, 0]));
console.log(findSmallestInt([1, 56, 232, 12, 8]));
