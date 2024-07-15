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
