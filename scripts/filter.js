const newArr = [5, 2, 3, 1, 6];

// filter odd values

function odd(x) {
  return x % 2 !== 0;
}

const oddOutput = newArr.filter(odd);

console.log("oddOutput", oddOutput);

// filter odd values

function even(x) {
  return x % 2 == 0;
}

const evenOutput = newArr.filter(even);

console.log("evenOutput", evenOutput);


