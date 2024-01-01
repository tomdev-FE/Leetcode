/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
    let result = 0,
    sign = 1;
  const stack = [],
    operationStack = [];

  for (let i = 0; i < str.length; i++) {
    const curr = str.charAt(i);
    if (curr === ' ') {
      continue;
    } else if (curr === '+') {
      sign = 1;
    } else if (curr === '-') {
      sign = -1;
    } else if (curr >= '0' && curr <= '9') {
      let num = curr;
      while (
        i + 1 < str.length &&
        str.charAt(i + 1) >= '0' &&
        str.charAt(i + 1) <= '9'
      ) {
        num += str.charAt(i + 1);
        i++;
      }
      result += sign * parseInt(num);
    } else if (curr === '(') {
      stack.push(result);
      result = 0;
      operationStack.push(sign);
      sign = 1;
    } else if (curr === ')') {
      result = operationStack.pop() * result + stack.pop();
      sign = 1;
    }
  }
  return result;
};