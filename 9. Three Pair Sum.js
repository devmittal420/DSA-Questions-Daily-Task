function threePairSum(num) {
  let empArr = [];
  for (let i = 0; i <= num.length; i++) {
    for (let j = i + 2; j < num.length; j++) {
      const num2 = num[j - 1];
      if (num[j] === -(num[i] + num2)) {
        empArr = [num[i], num2, num[j]];
      }
    }
  }
  console.log(empArr);
}

const num = [1, 2, 3, 4, -5, -6];
console.log(threePairSum(num));
