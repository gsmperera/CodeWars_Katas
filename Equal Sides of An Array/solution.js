console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function findEvenIndex(arr) {
  for (let x = 0; x < arr.length; x++) {
    if (
      arr.slice(0, x).reduce((t, n) => t + n, 0) ==
      arr.slice(x + 1).reduce((t, n) => t + n, 0)
    )
      return x;
  }
  return -1;
}

// More Solutions

//Tests
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
