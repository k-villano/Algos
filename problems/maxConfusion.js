/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveAnswers = (answerKey, k) => {
    // consider how you will count the max t or f
    let max = 0;

    // while counting allow condition of flipping and decrementing k

   // probably some recusion to consider sliding window senerio

   //make an accurate sliding window probably using two pointers

   // probably need some take it or leave it strategy for using or not using a flip
   const tally = (arr, n) => {
     if (arr.length <= max) return;
     let currMax = 0;
     let currCount = 0;
     let currAnwser = arr[0];
     for (let bool of arr) {
        if (bool === currAnwser) {
            currCount++;
        } else if (n) {
            currAnwser++;
            n--;
        } else {
            currAnwser = !currAnwser;
            currMax = Math.max(currMax, currCount);
            currCount = 1;
            n = k;
        }
     };
     max = Math.max(max, currMax);
     
     i++;
     j++;

     while (answerKey[i] === answerKey[j]) j++;

   };

   let i = 0;
   let j = 0;

   while (answerKey[i] === answerKey[j]) j++;

   tally(answerKey.slice(i, j + 1), k);
    
};