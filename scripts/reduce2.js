// the reduce method executes a reducer function for array element

// the reduce method return a single value which is the functions accumulated result

// thr reduce method does not execute the function for empty array elements

// the reduce method does not hcnage the original array

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
