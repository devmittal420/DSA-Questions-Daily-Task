// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number,
//  and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(num) {
  let empArr = [];
  for (let i = 1; i <= num; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      empArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      empArr.push("fizz");
    } else if (i % 5 === 0) {
      empArr.push("Buzz");
    } else {
      empArr.push(i);
    }
  }
    console.log(empArr);
}
console.log(fizzBuzz(100));
