//Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

const isBalanced = (str) => {
  let stack = [];
  let match = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      if(str[i] !== match[stack.pop()]) {
        return false;
      }
    }
  }
  if(stack.length > 0) {
    return false;
  }
  return true;
}
