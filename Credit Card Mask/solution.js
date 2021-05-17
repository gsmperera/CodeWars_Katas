console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function maskify(cc) {
  let text = "";
  for (let x in cc) {
    if (x < cc.length - 4) text += "#";
    else text += cc[x];
  }
  return text;
}

// More Solutions
// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }

//Tests
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
