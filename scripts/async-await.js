// create a promise

const P = new Promise((resolve, reject) => {
  resolve("Promise resolved");
})

// async always returns a promise

async function getData() {
  return "Bhargav";
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
