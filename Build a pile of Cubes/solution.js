console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function findNb(m) {
    
    // 1^3 + 2^3 + 3^3 + ... + n^3 = m
    //                (n(n+1)/2)^2 = m
    //                    n(n+1)/2 = Math.sqrt(m)
    //                     n^2 + n = 2*Math.sqrt(m)
    //           (n + 1/2)^2 - 1/4 = 2*Math.sqrt(m)
    //                 (n + 1/2)^2 = 2*Math.sqrt(m) + 1/4
    //                             = (8*Math.sqrt(m) + 1) / 4
    //                     n + 1/2 = Math.sqrt( (8*Math.sqrt(m) + 1) ) / 2
    //                           n = ( Math.sqrt( (8*Math.sqrt(m) + 1) ) - 1 )/ 2
    
    let n = ( Math.sqrt( 8*Math.sqrt(m) + 1 ) - 1 ) / 2;
    return (n%1 == 0) ? n : -1;
}

// More Solutions

// function findNb(m) {
//     let n = 0;
//     let sum = 0;
//     while (sum < m) {
//         n++;
//         sum += Math.pow(n, 3);
//     }
//     return sum === m ? n : -1;
// }

// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
// }

// function findNb(m) {
//     m = Math.sqrt(m) * 2;
//     if (m != parseInt(m)){
//       return -1;
//     }
//     var result = parseInt(Math.sqrt(m));
//     return (result * (result + 1) == m) ? result : -1;
// }

//Tests
console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));