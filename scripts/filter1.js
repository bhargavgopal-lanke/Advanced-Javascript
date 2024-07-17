// filter() creates a new array by filtering out the elements

// example to find out the users list under or equal to 18 years age from an array

const ages = [16, 17, 18, 18, 19, 20, 60];

const ageFilter = ages.filter((age) => age <= 18);

console.log("ageFilter", ageFilter);

// example to find out the users list greter than or equal to 18 years age from an array

const ageFilter1 = ages.filter((age) => age >= 18);

console.log("ageFilter1", ageFilter1);
