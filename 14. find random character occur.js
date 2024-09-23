function randomCharOccurs(str, char) {
  let register = {
    character: char,
    count: 0,
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      register.count++;
    }
  }
  console.log(register);
}

const str = "aaaabbaaccccccccccccccccccde";
const char = "b";
console.log(randomCharOccurs(str, char));
