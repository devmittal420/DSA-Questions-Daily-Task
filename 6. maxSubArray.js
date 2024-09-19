function maxSubarray(arr) {
  let num1 = arr[0];
  let num2 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    num1 = Math.max(arr[i], num1 + arr[i]);
    if (num1 > num2) {
      num2 = num1;
    }
  }

  return num2;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(arr));