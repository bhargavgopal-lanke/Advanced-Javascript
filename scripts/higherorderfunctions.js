const arr = [5, 2, 3, 1, 6];

// make double of the above array

const doubleArray = arr.map((double) => {
  return double * 2;
});

console.log("double", doubleArray);

// make double of the above array

const tripleArray = arr.map((double) => double * 3);

console.log("triple", tripleArray);
