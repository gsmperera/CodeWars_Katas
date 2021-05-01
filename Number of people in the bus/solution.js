console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
var number = function(busStops){
    let current = 0;
    for (let x in busStops) {
        x = busStops[x];
        current = current + x[0] - x[1];
    }
    return (current>=0) ? current : "error: number of people cant be negative";
}

// More Solutions
//const number = (busStops) => busStops.reduce((current, [on, off]) => current + on - off, 0);

//JavaScript Array reduce() Method
    //The reduce() method reduces the array to a single value.
    //The reduce() method executes a provided function for each value of the array (from left-to-right).
    //The return value of the function is stored in an accumulator (result/total).
    //Note: reduce() does not execute the function for array elements without values.
    //Note: This method does not change the original array.

    //Ex: Subtract the numbers in the array, starting from the beginning:
    //var numbers = [175, 50, 25];
    //numbers.reduce(myFunc);

    //function myFunc(total, num) {
    //    return total - num;
    //}

//Tests
console.log(number([[10,0],[3,5],[5,8]]));                          // answer should be 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));      // answer should be 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));        // answer should be 21