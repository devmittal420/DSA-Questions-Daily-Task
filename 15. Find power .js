function findPowOfNumber(number, exponent) {
  let product = 1;
  for (let i = 0; i < exponent; i++) {
    product = product * number;
  }
  console.log(product);
}

const input = findPowOfNumber(3, 3);
