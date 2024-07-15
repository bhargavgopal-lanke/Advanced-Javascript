const users = [
  {
    firstName: "Bhargav",
    lastname: "lanke",
    age: 28,
  },
  {
    firstName: "jyothi",
    lastname: "lanke",
    age: 27,
  },
  {
    firstName: "Donald",
    lastname: "Mc",
    age: 80,
  },
  {
    firstName: "Elon",
    lastname: "Musk",
    age: 48,
  },
  {
    firstName: "Deepika",
    lastname: "Padukone",
    age: 34,
  },
];

// get list of full names

const fullNameList = users.map((fullNames) => fullNames.firstName);

console.log("list", fullNameList);
