/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    // return them all in an array so need to look at every option and add it to result array
    // iterate in some way and then see what you can add to it
    const results = [];
    if (nums.length < 3) return results;
    //maybe sort first 
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = i + 1;
    let k = j + 1;

    // if its equal to zero push into array
    // if greater than zero return results
    // if less than zero increment k
      // if that more return
      // if less increment k
        // if k is array length increment j an k = j + 1
        // continue process if j = array - 1 length then increment i and reset j and k
        // if i = array length - 2 then just return results
    while (i < nums.length - 2){
        if (j === nums.length - 1){
            i++;
            j = i + 1;
            k = j + 1;
        } else if (k === nums.length) {
            j++;
            k = j + 1;
        } else if ((nums[i] + nums[j] + nums[k]) === 0) {
            results.push([nums[i], nums[j], nums[k]]);
            // increment 
            k++
        } else if ((nums[i] + nums[j] + nums[k]) > 0 && j === i + 1 && k === j + 1) {
            break;
        } else if ((nums[i] + nums[j] + nums[k]) > 0 && j < k - 1){
            j++;
            k = j + 1;
        } else if ((nums[i] + nums[j] + nums[k]) > 0 && i < j - 1){
            i++;
            j = i + 1;
            k = j + 1;
        } else k++;
    };
    return results
};

// console.log(threeSum([1, 0, -1, 2, 5, -7, 9, 20, -5, -20, -3]));

// console.log([1, 0, -1, 2, 5, 7, 9, 20, -5].sort((a, b) => a - b));

// console.log([1, 0, -1, -2].sort((a, b) => a - b));