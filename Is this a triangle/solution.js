console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
const isTriangle = (a,b,c) => ( a>=b+c || b>=a+c || c>=a+b ) ? false : true;

// More Solutions
// const isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2;
// const isTriangle = (a,b,c) => ( a+b>c && a+c>b && c+b>a );

//Tests
console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));