function palindrom(int) {
  // console.log(int);

  let temp = int;
  //   console.log(temp);
  let rem;
  let sum = 0;

  while (int) {
    rem = Math.floor(int % 10);
    // console.log(rem);
    sum = sum * 10 + rem;
    int = Math.floor(int / 10);
    // console.log(int);
  }

  return temp === sum
}

const int = 121;
console.log(palindrom(int));
