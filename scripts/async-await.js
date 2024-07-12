// create a promise
// resolve the promise after 5 seconds

const P = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

// create second promise
const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

// async always returns a promise

async function getData() {
  // in this async/await scenario JS engine stops the execution at this line until the promise is resolved  
  const promValue = await P;
  console.log("promValue1", promValue);
  console.log("code after promise");
}

getData();

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));
