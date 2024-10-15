function addNum(str) {
  let register = {};

  for (let i = 0; i < str.length; i++) {
    register[i] = str[i];
  }
  console.log(register);
}

const str = ["John", "Peter", "Sally", "Jane"];
console.log(addNum(str));
