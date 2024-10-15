function sort(num) {
  let arr = [];
  let temp;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > num[i + 1]) {
      temp = num[i];
      num[i] = num[i + 1];
      num[i + 1] = temp;
    }
    arr.push(num[i])
  }
  return arr;
}
const num = [3, 1, 2];
console.log(sort(num));
