import { users } from "../helper/Data.js";
// Example 1
// Add all the numbers in an array.
const reduceArray = [5, 2, 3, 1, 6, 11, 20, 2];
let max = 0;
for (let i = 0; i < reduceArray.length; i++) {
  max = max + reduceArray[i];
}

// Add all the numbers in an array using reduce method

const addAllNumbers = reduceArray.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

//   console.log("addAllNumbers", addAllNumbers);

//   Example 2
// Find the max number in an array.
// Here I'm looping through all the items in an array and wrote condition to find the number greater than findMaxNum variable
let findMaxNum = 0;
for (let i = 0; i < reduceArray.length; i++) {
  if (reduceArray[i] > findMaxNum) {
    findMaxNum = reduceArray[i];
  }
}

// example 2 using reduce method

const findMaxNumreduceResult = reduceArray.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// console.log("findMaxNumreduceResult", findMaxNumreduceResult);

//Example 3
// find the list of users with the same age group using reduce method

const rest = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log("rest", rest);

// Example 4
// find the list of people whose age is less than 30

const ageLessThanThirty = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.age);
  }
  return acc;
}, []);

// console.log("rest", ageLessThanThirty);

// Example 5
// convert an array of arrays into key value pairs.
const keyValuePairs = [
  ["username", "Bhargav"],
  ["membership", "1996-05-08"],
  ["age", 29],
];

const keyValueResult = keyValuePairs.reduce((acc, curr) => {
  let key = curr[0];
  let value = curr[1];
  acc[key] = value;
  return acc;
}, {});

console.log("keyValueResult", keyValueResult);
