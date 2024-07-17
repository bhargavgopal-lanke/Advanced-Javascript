const items = [
  {
    name: "rice",
    price: 100,
  },
  {
    name: "Book",
    price: 250,
  },
  {
    name: "chicken",
    price: 240,
  },
  {
    name: "Monitor",
    price: 12000,
  },
  {
    name: "laptop",
    price: 70000,
  },
  {
    name: "shoes",
    price: 11000,
  },
];
// claculate the price of all the items.
// this is an accumulator pattern
let totalPrice = 0;

items.forEach((item) => {
  totalPrice = totalPrice + item.price;
});

console.log("totalPrice", totalPrice);

// claculate the price of all the items using reduce method
// reduce method takes an array of values and reduces it to one single value which is the acuumulated result
// accumulator is the previous value returned from reduce method.

const totalItemsPriceReduce = items.reduce((acc, curr) => {
  acc += curr.price;
  return acc;
}, 0);

console.log("totalItemsPriceReduce", totalItemsPriceReduce);

// get users who are with the same name using reduce method

const People = [
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

const groupPeopleReducer = People.reduce((acc, person) => {
  console.log("test", acc[person.age]);

  if (acc[person.age] == null) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});

console.log("groupPeopleReducer", groupPeopleReducer);

// find the sum of all materials req to build a house

const materials = [
  {
    name: "Brick",
    cost: 3000,
  },
  {
    name: "Plaster",
    cost: 24000,
  },
  {
    name: "Wood",
    cost: 50000,
  },
];

const materialSum = materials.reduce((acc, curr) => {
  console.log("acc", acc);
  console.log("curr.cost", curr.cost);
  acc += curr.cost;
  return acc;
}, 0);

console.log("materialSum", materialSum);

// convert a two-dimentional array  of key-value pairs into an object

const keyValuePairs = [
  ["username", "Bhargav"],
  ["membership", "1996-05-05"],
  ["age", 27],
];

const keyValueResult = keyValuePairs.reduce((acc, curr) => {
  let key = curr[0];
  let value = curr[1];
  // assigning the property to the object
  acc[key] = value;
  // return the object
  return acc;
}, {});

console.log("keyValueResult", keyValueResult);

// get the highest salary from the below users list

const highestSalaryPerson = [
  {
    name: "Bhargav",
    occupation: "Software Developer",
    salary: 92000,
  },
  {
    name: "Gopal",
    occupation: "Software Developer",
    salary: 100001,
  },
  {
    name: "Hussain",
    occupation: "Software Developer",
    salary: 40000,
  },
  {
    name: "Raheem",
    occupation: "Software Developer",
    salary: 25000,
  },
];

const highestSalaryReduce = highestSalaryPerson.reduce((acc, curr) => {
  if (curr.salary > acc) {
    acc = curr.salary;
  }
  return acc;
}, 0);

console.log("highestSalaryReduce", highestSalaryReduce);

// count the occurances of each string in an array

const colors = ["green", "green", "red", "blue", "red", "red"];

const occurances = colors.reduce((acc, curr) => {
  // check the current value in the accumulator object if it's not there set the value to 1
  // check the current value in the accumulator object if it's there increment the value
  // accmulator of current value is the key and the assigned value is the object value
  if (acc[curr]) {
    acc[curr] = ++acc[curr];
  } else {
    acc[curr] = 1;
  }
  // return the previous value
  return acc;
}, {});

console.log("occurances", occurances);
