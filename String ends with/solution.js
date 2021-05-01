console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
const solution = (str, ending) => (ending == '' || str.slice(-ending.length) == ending) ? true : false;

// More Solutions

// const solution = (str, ending) => str.endsWith(ending);

// const solution = (str, ending) => str.substr(-ending.length) == ending;

//Tests
console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));