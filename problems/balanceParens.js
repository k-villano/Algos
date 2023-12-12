/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    // object to store pairs
    // probably a stack to know what we are looking for
    const validParens = {
        '(':')',
        '{':'}',
        '[':']'
    }

    // some strategy to iterate through string
    const parenStack = [];

    for (let char of input){
      // see if its a paren
      if (parenStack.length) {
        if (validParens[parenStack[parenStack.length - 1]] === char) {
            parenStack.pop();
            continue;
        }
      }
      if (validParens[char]) parenStack.push(char); 
      else if (Object.values(validParens).includes(char)) return false;
    }
    
    return !parenStack.length;
};

console.log(balancedParens('[](){}'));
console.log(balancedParens('[{](})'))

// module.exports = { balancedParens} ;