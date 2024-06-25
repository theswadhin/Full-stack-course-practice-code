//exp-1
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);
// console.log(2 * '2')

//exp-2
// let name = "Ram";
// function sayHello() {
//  console.log("Hello, " + name + "!");
//  let name = "Shyaam";
// }
// sayHello();

//exp-3
// function createCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       console.log(count);
//     };
//   }
  
//   const counter1 = createCounter();
//   const counter2 = createCounter();
  
//   counter1();
//   counter1();
//   counter2();
//   counter1();

//exp-4
// function calculateArea(length, width) {
//     if (length > 0 && width > 0) {
//       return length * width;
//     } else {
//       return "Invalid dimensions!";
//     }
//   }
  
//   console.log(calculateArea(5, 7));
//   console.log(calculateArea(0, 10));
//   console.log(calculateArea(-3, 4));
//   console.log(calculateArea("2", 6));

//exp-5
var x = 1;
if (false) {
 var x = 2;
 console.log(x);
}
console.log(x);