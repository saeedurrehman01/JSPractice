// let name = "Mosh";
// let age = 30;
// let firstName = undefined;

// let person = {
//   name: "Saeed",
//   age: 26,
// };

// // console.log(person);

// person.name = "Rehman";

// // console.log(person);

// for (let i = 0; i <= 5; i++) {
//   console.log("Hello World", i);
// }

function maxNumber(a, b) {
  return a > b ? a : b;
}

number1 = maxNumber(11, 15);

console.log(number1);

function isLandscape(width, height) {
  return width > height;
}

picture = isLandscape(2, 3);
console.log(picture);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 == 0 && input % 5 == 0) return "FizzBuzz";
  if (input % 5 == 0) return "Buzz";
  if (input % 3 == 0) return "Fizz";
  return input;
}

const output = fizzBuzz(15);
console.log(output);
