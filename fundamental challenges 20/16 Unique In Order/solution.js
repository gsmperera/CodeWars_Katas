console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
let uniqueInOrder = function (iterable) {
  if (iterable == []) return [];
  let pre = iterable[0];
  let strList = [iterable[0]];
  for (let i in iterable) {
    if (iterable[i] != pre) strList.push(iterable[i]);
    pre = iterable[i];
  }
  return strList;
};

// More Solutions
// let uniqueInOrder = function(iterable) {
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

//Tests
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
