/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (!digits.length) return [];
    // for each digit go through combinations
    // result array
    // large object with conversions where you can iterate through it
    const conversion = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz'
    }

    // length of final array is length of the value string times each other
    // some recusive case with a memo, when the memo is the length of the digits push it into the result arr
    // base case for the index is at length for a given conversion
    const results = [];
    // still doesnt account for duplicates
    // posibly iterate first to deal with that
    const recurse = (i, memo = '') => {
        if (memo.length === digits.length) return results.push(memo);

        for (let char of conversion[digits[i]]){
            recurse(i + 1, memo + char)
        }

    }
    recurse(0);
    return results; 
};

// console.log(letterCombinations('234'))
