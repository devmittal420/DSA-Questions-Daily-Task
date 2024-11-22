function reverse(num) {
  let sum = 0;
  let rem;
  let temp = num;
  num = Math.abs(num);
  let minNum = -Math.pow(2, 31);
  let maxNum = Math.pow(2, 31);

  while (num > 0) {
    rem = Math.floor(num % 10);
    sum = sum * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (sum < minNum || sum > maxNum) {
    return 0;
  }
  return temp < 0 ? -sum : sum;
}
const input = -123;
console.log(reverse(input));
