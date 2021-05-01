console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function openOrSenior(data){
    const newData = [];
    for (x in data) {
        x = data[x];
        if (x[0] >= 55 & x[1] > 7) {
            newData.push("Senior");
        } else if (x[0] < 55 || x[1] <= 7) {
            newData.push("Open");
        } else return "error";
    }
    return newData;
}

// More Solutions
// function openOrSenior(data){
//     return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
// }

//Tests
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));