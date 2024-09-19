function largestPalindrom(str) {
  const splitStr = str.split(" ");
  let max = 0;
  let largestPalindrome = "";

  for (let i = 0; i < splitStr.length; i++) {
    // console.log(splitStr.length);

    let word = splitStr[i];
    // console.log(word);

    let reversedWord = "";

    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }

    if (reversedWord === word) {
      if (word.length > max) {
        max = word.length;
        largestPalindrome = word;
      }
    }
  }
  return largestPalindrome;
}

const str =
  "Hello madam , my name is neha rawat. I am working with bob since 4 years.";
console.log(largestPalindrom(str));
