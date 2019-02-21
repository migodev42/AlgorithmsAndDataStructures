let testCaseWrong0 = '(}';
let testCaseWrong1 = '{[()}]';
let testCaseWrong2 = '(){[}]';

let testCaseRight0 = '({[]})';
let testCaseRight1 = '(){}[]';

function braceTester(braces) {
  let leftBraces = { ')': '(', ']': '[', '}': '{' },
    stack = [];
  for (let el of braces) {
    if (Object.values(leftBraces).indexOf(el) !== -1) {
      stack.push(el);
    } else if (leftBraces[el] === stack.pop()) {
      continue;
    } else {
      return false;
    }


  }
  return stack.length === 0 ? true : false;
}

console.log(braceTester(testCaseWrong0));
console.log(braceTester(testCaseWrong1));
console.log(braceTester(testCaseWrong2));
console.log(braceTester(testCaseRight0));
console.log(braceTester(testCaseRight1));