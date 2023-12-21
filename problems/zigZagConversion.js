/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (s.length <= numRows) return s;
    // at first its numRows - 1 * 2 its a corner 
    // then numRows - 2 * 2 and 1 * 2
    // then numRows - 3 * 2 and 2 * 2
    // then numRows - 4 * 2 and 3 * 2
    let result = '';

    // base could be when new string matches input length
    // other base case to increment j  it when youve gotten to the end 
      // need some way to determine what that is
    
    // s.length / numRows * 2 - 2 to ceiling
    // 14 / 6 ---> 3
    const recurse = (i) => {

        if (i === numRows) return;
        let j = i;

        while(j < s.length){
            // add it 
            // if were not at the bottom row
            if (i !== numRows - 1){
              result += s[j];
              j += (numRows - (i + 1)) * 2;
            }

            // if were not at the top row
            if (i !== 0){
                if (j < s.length){
                result += s[j];
                j += i * 2;
                } 
            }
        }
        recurse(i + 1)
    }

    recurse(0);
    return result;
};

console.log(convert("PAYPALISHIRING", 2))