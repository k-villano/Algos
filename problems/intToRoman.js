/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = (num) => {
    // object that relates roman to int
    const conversion = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let result = '';
    
    const helper = (number, digit) => {
    //   console.log(number, digit, result);

      if (number === 0) return;
      if (digit > 6) digit = 6;
      

    // some conditional for 9 and 4 that concatonates a I
    //recursive case starting at ones place
      let addition = '';
      let place = number % 10;

      if (place === 4) {
        addition = `${conversion[digit]}${conversion[digit + 1]}`
      } else if (place === 9) {
        addition = `${conversion[digit]}${conversion[digit + 2]}`
      } else {
        if (place >= 5) {
        addition = conversion[digit + 1];
        place -= 5
        } 
        while (place) {
            addition += conversion[digit];
            place--;
        }
      }

      result = addition + result;
      let newNum = Math.floor(number / 10)
      helper(newNum, digit + 2);   
    }

    helper(num, 0);
    return result;
};

// console.log(intToRoman(2));



var intToRoman2 = function(num, digit = 0, result = '') {
    if (!num) return result;
    // object that relates roman to int
    const conversion = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

    // some conditional for 9 and 4 that concatonates a I
    //recursive case starting at ones place
    let addition = '';
    let place = num % 10;

    if (place === 4) {
      addition = `${conversion[digit]}${conversion[digit + 1]}`
    } else if (place === 9) {
      addition = `${conversion[digit]}${conversion[digit + 2]}`
    } else {
      if (place >= 5) {
        addition = conversion[digit + 1];
        place -= 5
      } 
      while (place) {
        addition += conversion[digit];
        place--;
      }
    }

    return intToRoman(Math.floor(num / 10), digit + 2, addition + result)
};

