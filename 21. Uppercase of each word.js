function upperCase(str) {
  const splitStr = str.split(" ");
  // console.log(splitStr);

  let empStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    empStr = empStr + splitStr[i][0].toUpperCase() + splitStr[i].slice(1) + " ";
  }

  empStr = empStr.slice(0, -1);
  console.log(empStr);
}

const str = "Hello, i am dev";
console.log(upperCase(str));
