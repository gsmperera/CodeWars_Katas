console.log(document.getElementsByTagName('h1')[0].innerText);

// My Solution
function primeFactors(n) {
    let primeFactor = 2;
    let number = n;
    let primeFactorsArr = [];

    while (number != 1) {
        while (number % primeFactor === 0) {
            primeFactorsArr.push(primeFactor);
            number = number / primeFactor;
        }
        primeFactor = nextPrimeNumber(primeFactor);
    }

    const primeFactorsString = primeFactorsArr.reduce(
        (total, currentValue, currentIndex, arr) => {
            // first prime factor
            if (currentIndex === 0) return [1, `${currentValue}`];
            // new prime factor
            if (currentValue != arr[currentIndex - 1])
                return [1, `${total[1]})(${currentValue}`];
            // same as previous
            if (currentValue === arr[currentIndex - 1]) {
                // same as previous but not same as next
                if (currentValue != arr[currentIndex + 1])
                    return [total[0] + 1, `${total[1]}**${total[0] + 1}`];
                // same as previous and also same as next
                return [total[0] + 1, `${total[1]}`];
            }
        },
        // initial value [repeatingCount, string]
        [1, '']
    );
    // This is the final return string of the function
    return `(${primeFactorsString[1]})`;

    function nextPrimeNumber(currentPrimeFactor) {
        let nextPrimeFactor = currentPrimeFactor + 1;
        while (!isPrime(nextPrimeFactor)) {
            nextPrimeFactor++;
        }
        return nextPrimeFactor;

        function isPrime(num) {
            // not considered numbers below 2 here
            if (num % 2 === 0) return false;

            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) return false;
            }
            return true;
        }
    }
}

// More Solutions
// function primeFactors(n) {
//     for (let i = 2, result = '', f; i <= n; i++) {
//         f = 0;
//         while (n % i == 0) {
//             f++;
//             n /= i;
//         }
//         result += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
//     }
//     return result || '(' + n + ')';
// }

// Tests
console.log(primeFactors(10));
console.log(primeFactors(86240));
console.log(primeFactors(7775460));
// should return "(2**2)(3**3)(5)(7)(11**2)(17)"
