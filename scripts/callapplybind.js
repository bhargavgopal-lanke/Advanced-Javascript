// call apply bind examples
// here also we're using this method.

const student = {
  name: "bhargav",
  printName: function () {
    console.log(this);
  },
};

let student2 = {
  name: "Gopal",
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

// student2 = JSON.parse({ b: "New" });

console.log("student2", student2);
