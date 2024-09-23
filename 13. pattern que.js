function pattern(num) {
  let empStr = "";

  for (let i = 1; i <=num; i++) {
    for (let j = num; j > i - 1; j--) {
        // console.log(j);
        
      empStr += j;
    }
    empStr += "\n";
  }
  console.log(empStr);
}

console.log(pattern(5));

//12345
// 2345
// 345
// 45
// 5
// 54321
// 5432
//543
//54
//5
