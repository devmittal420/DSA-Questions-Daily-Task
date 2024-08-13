// Q. Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//    Output: [[7,4,1],[8,5,2],[9,6,3]]

function rotate(arr) {
  let emptyArray = [];
  let len = arr[0].length - 1;

  //   console.log(arr[0]);

  for (let i = 0; i <= len; i++) {
    let newArray = [];

    for (let j = arr.length - 1; j >= 0; j--) {
      newArray = newArray.concat(arr[j][i]);
    }
    emptyArray.push(newArray);
  }
  return emptyArray;
}

const arr = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
const result = rotate(arr);
console.log(result);
