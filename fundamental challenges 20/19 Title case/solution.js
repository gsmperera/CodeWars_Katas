console.log(document.getElementsByTagName('h1')[0].innerText);

// My Solution
function titleCase(title, minorWords) {
    if ((title = title.toLowerCase().split(' '))) {
        if (minorWords) {
            minorWords = minorWords.toLowerCase().split(' ');
        } else minorWords = [];

        return title
            .map((word, index) => {
                return index === 0
                    ? capitalize(word)
                    : minorWords.includes(word)
                    ? word
                    : capitalize(word);
            })
            .join(' ');
    }

    function capitalize(str) {
        return str.length > 0 ? str[0].toUpperCase() + str.slice(1) : '';
    }
}

// Tests
console.log(titleCase(''));
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
