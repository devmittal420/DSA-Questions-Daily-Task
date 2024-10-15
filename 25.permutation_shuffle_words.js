function shuffleWords(str) {
  let empStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!empStr.includes(str[i])) {
      empStr = empStr.concat(str[i]);
    }
  }
  // console.log("empStr: ", empStr);

  let splitStr = empStr.split("");
  let start = 0;
  let end = splitStr.length - 1;

  let empArr = [];
  function permutation(start, end) {
    if (start === end) {
      empArr.push(splitStr.join(""));
    } else {
      for (let i = start; i <= end; i++) {
        let temp = splitStr[start];
        splitStr[start] = splitStr[i];
        splitStr[i] = temp;

        permutation(start + 1, end);   // start from next index 
        {
          temp = splitStr[start];
          splitStr[start] = splitStr[i];
          splitStr[i] = temp;
        }
      }
    }
  }
  permutation(start, end);
  console.log(empArr);
}

const str = "dev";
shuffleWords(str);
