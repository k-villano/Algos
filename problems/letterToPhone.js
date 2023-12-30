/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
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
    const nums = digits.toString().split('');
    let resultLength = 1;

    for (const num of nums){
        resultLength *= conversion[num].length;
    }

    const result = new Array(resultLength).fill('');

    console.log(result)



    // two options insert the correct number of first characters first then  go onto next,
    // or complete each result string first then move on

    // aproach a situation of just nested loops





    
};

