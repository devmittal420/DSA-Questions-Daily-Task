function paranthesis(speChar) {
  if (speChar.length % 2 !== 0) {
    return false;
  }
  const empArr = [];
  const register = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < speChar.length; i++) {
    const elem = speChar[i];
    if (register[elem]) {
      const lastElem = empArr.pop();
      console.log(lastElem);

      if (register[elem] !== lastElem) {
        return false;
      }
    } else {
      empArr.push(elem);
    }
  }
  return true;
}

const speChar = "{()}";
console.log(paranthesis(speChar));
