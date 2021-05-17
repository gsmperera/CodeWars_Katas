console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function solution(string) {
  return string.replace(/(?=[A-Z])/g, " ");
}

// More Solutions
// function solution(string) {
//     return string.replace(/([A-Z])/g, ' $1');
// }
// function solution(string) {
//     return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// }

//Tests
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
