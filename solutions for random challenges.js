/* Kata 21 ##########################################

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

// Solution
function validParentheses(parens) {
    return (parens.length = 0
        ? true // return true for empty strings
        : parens
              .split('') // conver string to arry '(())' => [ (, (, ), ) ]
              .map((p) => (p === '(' ? 1 : p === ')' ? -1 : 0)) // [ (, (, ), ) ] => [1, 1, -1, -1]
              .reduce((pre, cur) => (pre >= 0 ? pre + cur : 1000)) === 0 // make sure that have same amount of open and close peranthesis while making sure that no close parentheses befor open
        ? true // return true if above all argument pass
        : false);
}

// Tests
console.log(validParentheses('(())(()()(()))'));
console.log(validParentheses('(())'));
console.log(validParentheses('(()()'));

// ##################################################
