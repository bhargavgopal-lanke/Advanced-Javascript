import { users } from "../helper/Data.js";

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

// get list of full names map method

const fullNameList = users.map(
  (fullNames) => fullNames.firstName + " " + fullNames.lastname
);

console.log("list", fullNameList);

// how many have age 28
// the initial value of the accumulator is an empty object
// acc = {26: 2, 25: 1}

const age28 = users.reduce((acc, curr) => {
  // check if accumulator of current age (26) is present or not
  // there could be a case where 26 is not present in the acc object
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("get person age", age28);

// filter out te list of all the people whose age is less than 30

const listOfPeopleAgeLessThan30 = users
  .filter((x) => x.age < 30)
  .map((x) => x.firstName);

console.log("age less than 30", listOfPeopleAgeLessThan30);

// filter out te list of all the people whose age is less than 30 using reduce method

const ageLessThanReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc = acc + " " + curr.firstName;
  }
  return acc;
}, []);

console.log("ageLessThanReduce", ageLessThanReduce);
