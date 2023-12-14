/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // very similat to num islands
    const visited = new Set();
    let found = false;
  
    // make a search withing the board for the right letter
    const search = (i, j, letter) => {
        // base case
        if (letter === word.length) {
            found = true;
            return
        }
        // mark where you are as visited
        visited.add(`${i}${j}`)
  
        // then loop up down left right
        // we need to consider backtracking
  
        // right
        if (board[i][j + 1] && !visited.has(`${i}${j + 1}`) && board[i][j + 1] === word[letter]) {
            search(i, j + 1, letter + 1);
            visited.delete(`${i}${j + 1}`);
        }
        // left
        if (board[i][j - 1] && !visited.has(`${i}${j - 1}`) && board[i][j - 1] === word[letter]) {
            search(i, j - 1, letter + 1);
            visited.delete(`${i}${j - 1}`);
        }
        // up
        if (board[i - 1] && board[i - 1][j] && !visited.has(`${i - 1}${j}`) && board[i - 1][j] === word[letter]) {
            search(i - 1, j, letter + 1);
            visited.delete(`${i - 1}${j}`);
        }
        // down
        if (board[i + 1] && board[i + 1][j] && !visited.has(`${i + 1}${j}`) && board[i + 1][j] === word[letter]) {
            search(i + 1, j, letter + 1);
            visited.delete(`${i + 1}${j}`);
        }
    }
  
    // probably first want to find the first letter
      // then search and mark probably adding to a set as you go to mark where you've been
      // if you make it to the end of the word then return true
        //loop through matrik to find starting letter
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] === word[0]){
                // invoke the function to seach in each direction for the next letters
              search(i, j, 1);
              if (found) return found;
              visited.clear();
            }
        }
    }
  
      
      return found;
  };