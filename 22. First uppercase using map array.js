function firstWordUpperCase(str) {
  const splitStr = str.split(" ");
  
  let empStr = "";

  splitStr.map((word) => {
    empStr = empStr + word[0].toUpperCase() + word.slice(1) + " ";
  });
  empStr = empStr.slice(0, -1);
  console.log(empStr.length);
}
const str = "Hello, i am dev";
console.log(firstWordUpperCase(str));
