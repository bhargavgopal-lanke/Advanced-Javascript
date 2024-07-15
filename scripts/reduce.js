const reduceArray = [5, 2, 3, 1, 6, 11, 20];

function reduceFunction(x) {
  let max = 0;

  for (let i = 0; i < x.length; i++) {
    max = max + x[i];
  }
  return max;
}

let result1 = reduceFunction(reduceArray);
console.log("reduce", result1);

// reduce result
let reduceResult = reduceArray.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log("reduceResult", reduceResult);

// find max number in an array

function findMaxNum(x) {
  let max = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}

console.log("max number", findMaxNum(reduceArray));

// find max number in an array using reduce method

const maxNumReduce = reduceArray.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log("maxNumReduce", maxNumReduce);
