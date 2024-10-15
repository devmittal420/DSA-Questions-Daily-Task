function isStar(star) {
  let empStr = "";
  for (let i = 0; i < k; i++) {
    for (let j = i; j < k; j++) {
      empStr += "* ";
    }
    empStr += "\n";
  }
  return empStr;
}

const k = 5;
console.log(isStar(k));


