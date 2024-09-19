function shiftZero(arr) {
  let empArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      empArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0)
    {
        empArr.push(arr[i]);
    }
  }
  console.log(empArr);
}

const arr = [4, 5, 0, 6, 0, 7, 0, 5, 0];
console.log(shiftZero(arr));
