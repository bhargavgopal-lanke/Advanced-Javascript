const newArr = [5, 2, 3, 1, 6];

// filter odd values

function odd(x) {
  return x % 2;
}

const oddOutput = newArr.filter(odd);

console.log("oddOutput", oddOutput);
