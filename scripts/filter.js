const newArr = [5, 2, 3, 1, 6];

// filter odd values

function isOdd(x) {
  return x % 2 !== 0;
}

const oddOutput = newArr.filter(isOdd);

console.log("oddOutput", oddOutput);

// filter odd values

function isEven(x) {
  return x % 2 == 0;
}

const evenOutput = newArr.filter(isEven);

console.log("evenOutput", evenOutput);
