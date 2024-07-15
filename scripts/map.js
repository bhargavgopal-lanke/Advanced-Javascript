const arr = [5, 2, 3, 1, 6];

// make double of the above array

const doubleArray = arr.map((double) => {
  return double * 2;
});

console.log("double", doubleArray);

// convert the double array into binary

function binary(x) {
  return x.toString(2);
}

const doubleBinary = arr.map(binary);

console.log("binary", doubleBinary);

// make double of the above array

const tripleArray = arr.map((double) => double * 3);

console.log("triple", tripleArray);

// odd and even using a ternary operator

const result = arr.map((x) => (x % 2 == 0 ? "even" : "odd"));

console.log("result", result);
