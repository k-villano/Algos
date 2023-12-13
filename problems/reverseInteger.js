/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let newNum = '';

    const recurse = num => {
        if (num === 0) return;
        const diff = num % 10;
        newNum += diff;
        recurse((num - diff)/ 10);
    }

    recurse(Math.abs(x));

    let finalNum;
    if (x < 0) finalNum = Number('-' + newNum);
    else finalNum = Number(newNum);

    if (finalNum < ( -1 * 2**31) || finalNum > (2**31 - 1)) return 0; 
    return finalNum
};



console.log(2**31)