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

// ------------------------------

function isLandscape(width, height) {
  return width > height;
}

picture = isLandscape(2, 3);
console.log(picture);

// ------------------------------

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 == 0 && input % 5 == 0) return "FizzBuzz";
  if (input % 5 == 0) return "Buzz";
  if (input % 3 == 0) return "Fizz";
  return input;
}

const output = fizzBuzz(15);
console.log(output);
// ------------------------------

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  }
  let points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License Suspended");
  else console.log("Points", points);
}

checkSpeed(75);
// ------------------------------

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(i, "EVEN");
    } else console.log(i, "ODD");
  }
}

showNumbers(10);

// ------------------------------
function countTruthyElements(array) {
  let count = 0;
  for (let element of array) {
    if (element) {
      count++;
    }
  }
  return count;
}

// Example usage:
const sampleArray = [
  0,
  1,
  false,
  2,
  "",
  3,
  null,
  "hello",
  undefined,
  NaN,
  4,
  5,
];
const truthyCount = countTruthyElements(sampleArray);
console.log(truthyCount); // Output: 6

// ------------------------------

console.log(sumofNumbers(10));

function sumofNumbers(limit) {
  let sumNumber = 0;

  for (i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sumNumber += i;
  }
  return sumNumber;
}

// ------------------------------

showPrimes(20);

function showPrimes(limit) {
  for (i = 2; i <= limit; i++) if (isPrime(i)) console.log(i);
}

function isPrime(number) {
  for (j = 2; j < i; j++) if (i % j == 0) return false;

  return true;
}
