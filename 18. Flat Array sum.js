function flatArraySum(arr) {
  let empArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      sum += arr[i];
      empArr.push(arr[i]);
    } else {
      sum += flatArraySum(arr[i]);
      empArr = empArr.concat(flatArraySum(arr[i]));
    }
  }

  return sum;
}

const arr = [1, 2, [3, [4], [5, 6]], [7]];
console.log(flatArraySum(arr));
