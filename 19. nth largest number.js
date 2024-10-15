function largestNumber(arr, nth) {
  let register = {};

  for (let i = 0; i < arr.length; i++) {
    if (!register[arr[i]]) {
      register[arr[i]] = true;
    }
  }

  let convertArr = Object.keys(register).map(Number);

  let convertDecreaseArr = [];

  for (let i = convertArr.length - 1; i >= 0; i--) {
    convertDecreaseArr.push(convertArr[i]);
  }

  const largNum = convertDecreaseArr[nth - 1];
  console.log(largNum);
}

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 7, 9];
const nth = 2;
console.log(largestNumber(arr, nth));
