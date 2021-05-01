console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function duplicateEncode(word) {
    let newStr = "";
    for (let i in word) {
        const reg = "[" + word[i] + "]";
        const letter = new RegExp(reg, "gi");
        const list = word.match(letter);
        if (list.length > 1) newStr += ")";
        else newStr += "(";
    }
    return newStr;
}

// More Solutions
// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( (a, i, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
//       .join('');
// }

//Tests
console.log(duplicateEncode("dinI"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));