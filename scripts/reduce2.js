// the reduce method executes a reducer function for array element

// the reduce method return a single value which is the functions accumulated result

// thr reduce method does not execute the function for empty array elements

// the reduce method does not hcnage the original array

// the accumulator can be any value: number, null, undefined, array, object or even a promise

// clculating the item price example

const items2 = [
  {
    item: "iphone",
    price: 1000,
  },
  {
    item: "ipad",
    price: 2000,
  },
];

const itemsReduce = items2.reduce((acc, curr) => acc + curr.price, 0);

console.log(itemsReduce);

// example to find the most recent date
// initial value is the date value in this example

const dates = [
  "01/08/2022",
  "02/08/2022",
  "04/08/2022", // this is the most recent date find it
  "04/08/2022",
  "21/08/2022",
  "06/08/2022",
  "07/08/2022",
];

const datesReduce = dates.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, dates[0]);

console.log("datesReduce", datesReduce);

const keyArrayValuePairs = [
  "username",
  "Bhargav",
  "membership",
  "1996-05-05",
  "age",
  27,
];

let currArray = [];

const objectArrayResult = keyArrayValuePairs.reduce((acc, curr) => {
  let key;
  let val;
  currArray.push(curr);

  for (let i = 0; i < currArray.length; i++) {
    key = currArray[i];
    val = currArray[++i];
  }

  acc[key] = val;
  return acc;
}, {});

console.log("objectArrayResult", objectArrayResult);

// get users who are with the same name using reduce method

const People3 = [
  {
    name: "Bhargav",
    age: 28,
  },
  {
    name: "Bhargav",
    age: 28,
  },
  {
    name: "John",
    age: 26,
  },
  {
    name: "Gopal",
    age: 25,
  },
  {
    name: "Hussain",
    age: 28,
  },
];

const usersWithSameNameReducer = People3.reduce((acc, curr) => {
  // if the accumulator of current name is null then return an emty array
  if (acc[curr.name] == null) {
    acc[curr.name] = [];
  }
  // inside the accumulator object with object key name pushing the persons with the same age.
  acc[curr.name].push(curr.age);
  return acc;
}, {});

console.log("usersWithSameNameReducer", usersWithSameNameReducer);
