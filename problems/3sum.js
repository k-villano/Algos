/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    // return them all in an array so need to look at every option and add it to result array
    // iterate in some way and then see what you can add to it
    const results = [];
    //maybe sort first 
    nums.sort();
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
    while (i < array.length - 2){
        if ( i === nums.length - 2) return results;
        if (j === nums.length - 1){
            i++;
            j = i + 1;
            k = j + 1;
        } else if (k === nums.length) {
            j++;
            k = j + 1;
        } else if (nums[i] + nums[j] + nums[k] === 0) {
            results.push([nums[i], nums[j], nums[k]]);
            // in crement corresponding 
            k++
        } else if (nums[i] + nums[j] + nums[k] > 0 && j === i + 1 && k === j + 1) return results
        else if (nums[i] + nums[j] + nums[k] > 0 && j < k - 1){
            j++;
            k = j + 1;
        } else if (nums[i] + nums[j] + nums[k] > 0 && i < j - 1){
            i++;
            j = i + 1;
            k = j + 1;
        }
    };
};