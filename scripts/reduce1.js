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

const totalItemsPriceReduce = items.reduce((acc, curr) => {
  acc += curr.price;
  return acc;
}, 0);

console.log("totalItemsPriceReduce", totalItemsPriceReduce);
