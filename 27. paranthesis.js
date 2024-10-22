function isValid(char) {
  const empArr = [];
  const register = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < char.length; i++) {
    if (register[char[i]]) {
      let last = empArr.pop();
      if (register[char[i]] !== last) {
        return false;
      }
    } else {
      empArr.push(char[i]);
    }
  }
  return empArr.length === 0;
}
const speChar = "{{}}";
console.log(isValid(speChar));
