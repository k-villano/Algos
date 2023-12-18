
var WordDictionary = function() {
    this.words = new Set();
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.words.add(word);    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    // efficient search when there are no dots
    if (this.words.has(word)) return true;
    let flag = true
    if (word.includes('.')){
        // look for matches again
        for (const str of this.words){
            console.log(str)
            if (str.length === word.length){
                for (let i = 0; i < str.length; i++){
                    if (str[i] !== word[i] && word[i] !== '.') {
                        break
                    } else if((str[i] === word[i] || word[i] === '.') && i ===str.length - 1) return true;
                }
            }
        }
    }

    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const myWD = new WordDictionary();
myWD.addWord('hi');
myWD.addWord('bat');

console.log(myWD);

console.log(myWD.search('.at'));


console.log('.at'.length)