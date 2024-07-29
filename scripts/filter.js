const newArr = [5, 2, 3, 1, 6, 11, 20];

// filter odd values
// numbers which are not divisible by 2 are odd numbers

function isOdd(x) {
  return x % 2 !== 0;
}

const oddOutput = newArr.filter(isOdd);

console.log("oddOutput", oddOutput);

// filter even values
// numbers which are divisible by 2 are even numbers

function isEven(x) {
  return x % 2 === 0;
}

const evenOutput = newArr.filter(isEven);

console.log("evenOutput", evenOutput);

// give number which are greater than four

function greaterThanFour(x) {
  return x > 4;
}

const fourResult = newArr.filter(greaterThanFour);

console.log("fourResult", fourResult);

// give number which are greater than four shorter syntax

const greaterThan4 = newArr.filter((x) => x > 4);

console.log("short four", greaterThan4);
