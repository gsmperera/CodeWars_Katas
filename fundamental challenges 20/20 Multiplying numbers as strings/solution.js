console.log(document.getElementsByTagName('h1')[0].innerText);

// My Solution
const multiply = (a, b) => String(BigInt(a) * BigInt(b));

// Tests
console.log(multiply('2', '3'));
console.log(multiply('30', '69'));
console.log(multiply('11', '85'));
console.log(multiply('2', '0'));
console.log(multiply('0', '30'));
console.log(multiply('0000001', '3'));
console.log(multiply('1009', '03'));
console.log(multiply('98765', '56894'));
console.log(multiply('1020303004875647366210', '2774537626200857473632627613'));
console.log(multiply('58608473622772837728372827', '7586374672263726736374'));
console.log(multiply('9007199254740991', '9007199254740991'));
