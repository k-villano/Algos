/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */



const permPalin = str => {
    if (typeof str !== 'string') return false;
    // store letter to make sure there are even numbers of letters occuring
    // allow for one odd number of letters if length is odd
    const count = {}; ;
    let evens = 0;
  
    for (let char of str) {
      count[char] ? count[char]++ : count[char] = 1;
    }
    
    // iterate through object values make sure all even or only one odd
    Object.values(count).forEach((el) =>  evens += Math.floor(el / 2))
  
    return Math.floor(str.length / 2) === evens
}
  
  console.log(permPalin('ii'))
  

  
  
  // /* 
  //  * Extension: Solve in constant space complexity.
  //  */
  // const permPalinAdvanced = str => {
  
  // };
  
