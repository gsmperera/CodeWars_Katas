console.log(document.getElementsByTagName("h1")[0].innerText);

// My Solution
function validatePIN(pin) {
  if (pin.trim() != pin) return false;
  for (let x in pin) {
    x = pin[x];
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(x))) continue;
    return false;
  }
  return [4, 6].includes(pin.length) ? true : false;
}

// More Solutions
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }

//Tests
//should return False for pins with length other than 4 or 6.
console.log(validatePIN("1"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("-1.234"));

//should return False for pins which contain characters other than digits.
console.log(validatePIN("a234"));
console.log(validatePIN(".234"));

//should return True for valid pins.
console.log(validatePIN("1234"));
console.log(validatePIN("0000"));
console.log(validatePIN("123456"));
console.log(validatePIN("00000\n"));
