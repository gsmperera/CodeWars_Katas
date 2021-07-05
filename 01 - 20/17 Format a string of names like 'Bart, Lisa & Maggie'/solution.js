console.log(document.getElementsByTagName("h1")[0].innerText);

//My Solutions
// function list(names) {
//   let newStr = "";
//   for (let len = names.length, i = 0; i < len; i++) {
//     if (i == len - 2) {
//       newStr += names[i].name + " & ";
//     } else if (i == len - 1) {
//       newStr += names[i].name;
//     } else {
//       newStr += names[i].name + ", ";
//     }
//   }
//   return newStr;
// }

const list = (names) => {
  return names.reduce((total, currentValue, currentIndex, arr) => {
    return currentIndex == arr.length - 2
      ? total + currentValue.name + " & "
      : currentIndex == arr.length - 1
      ? total + currentValue.name
      : total + currentValue.name + ", ";
  }, "");
};
// More Solutions
// var list = (names) =>
//   names
//     .map((person) => person.name)
//     .join(", ")
//     .replace(/(.*),(.*)$/, "$1 &$2");

//Tests
console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
console.log(list([{ name: "Bart" }]));
console.log(list([]));
