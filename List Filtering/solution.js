console.log(document.getElementsByTagName("h1")[0].innerText);

function filter_list(l) {
  let list = [];
  for (let x in l) {
    let y = typeof l[x];
    if (y == "number") {
      list.push(l[x]);
    }
  }
  return list;
}

console.log(filter_list([1, 2, "a", "b"])); // answer should == [[1, 2]]
console.log(filter_list([1, "a", "b", 0, 15])); //answer should == [1, 0, 15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); //answer should == [1, 2, 123]

/* More Solutions

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}

*/
