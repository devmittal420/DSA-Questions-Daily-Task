function countDivisibleSubstrings(char) {
    const register = {};
    const charArray = ['ab', 'cde', 'fgh', 'ijk', 'lmn', 'opq', 'rst', 'uvw', 'xyz'];
  
    for (let i = 0; i < charArray.length; i++) {
      const elem = charArray[i];
      for (let j = 0; j < elem.length; j++) {
        register[elem[j]] = i + 1;
      }
    }
    // console.log("register: ", register);
  
    let count = 0;
  
    for (let i = 0; i < char.length; i++) {
      let sum = 0;
      for (let j = i; j < char.length; j++) {
        sum = sum + register[char[j]];
  
        if (sum % (j - i + 1) === 0) {
          count++;
        }
        console.log("count: ", count);
  
      }
    }
    return count;
  }
  
  const result = countDivisibleSubstrings("ahs");
  console.log(result);
  