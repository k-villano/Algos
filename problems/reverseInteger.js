/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // figure out if its negative
      // probably a boolean to keep track 
    let negative = false;
    if (x < 0) negative = true;

    let newNum = '';

    // if (negative) newNum += '-'

    const recurse = num => {
        if (num === 0) return;
        const diff = num % 10;
        newNum += diff;

        recurse((num - diff)/ 10);
    }
    recurse(Math.abs(x));
    
    if (negative) return Number('-' + newNum);
    
    return Number(newNum);
    // efficient solution will not use arrays 

    
};