function sort(num) {
  let arr = [];
  let temp;
  let len = num.length;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] > num[j]) {
        temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
    }
    arr.push(num[i]);
  }
  return arr;
}
const num = [3, 2, 5, 1, -1, 0];
console.log(sort(num));
