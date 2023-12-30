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
    let resultLength = digits.length ? 1 : 0;

    for (const num of digits){
        resultLength *= conversion[num].length;
    }

    const result = new Array(resultLength).fill('');

    for (let i = 0; i < digits.length; i++){
        let currStr = conversion[digits[i]]
        console.log(currStr)
        let resultInd = 0;
        
        for (let j = 0; j < resultLength; j++){
            if (resultInd > resultLength - 1) resultInd -= resultLength - 1
            console.log(resultInd)
            let charToAdd = Math.floor((resultInd / (resultLength / currStr.length)))
            if (charToAdd > currStr.length - 1) charToAdd = 0
            console.log(charToAdd);
            result[j] += currStr[charToAdd]
            resultInd += i === 0 ? 1 : i * 3
        }
    }   
    // two options insert the correct number of first characters first then  go onto next,
    // or complete each result string first then move on

    // aproach a situation of just nested loops

    return result; 
};

letterCombinations('')
