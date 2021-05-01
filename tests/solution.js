console.log(document.getElementsByTagName("h1")[0].innerText);

let reg = /^[a-z][a-z]+[0-9]*$|^[a-z][a-z]$/ig;

console.log(("JOHN").match(reg));