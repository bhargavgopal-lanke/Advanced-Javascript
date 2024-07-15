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
// reduce method takes an array of values and reduces it to one single value
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
