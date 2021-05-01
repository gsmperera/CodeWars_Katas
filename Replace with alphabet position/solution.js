console.log(document.getElementsByTagName("h1")[0].innerText);

//My Solution
function alphabetPosition(text) {
    text = text.toLowerCase();
    var newText = "";
    for (let x in text) {
        if (text[x] >= "a" && text[x] <= "z") {
            newText = newText + (text[x].charCodeAt() - 96) + " ";
        } else continue;
    }
    return newText.trim();
}

//More Solutions

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }



console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));