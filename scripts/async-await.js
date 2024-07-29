// create a promise
// resolve the promise after 5 seconds

const P = new Promise((resolve, reject) => {
  // if the timer is set for 5 secs after 5 secs this promise will be resolved.
  // if the timer for first promise is 10 secs and second one is 5 secs both will execue at the same time.
  // In case of promises the code execution will not stop at the promise line.
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10000);
});

// create second promise
const P2 = new Promise((resolve, reject) => {
  // after 10 secs this promise will be rsolved.
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

  const promValue2 = await P2;
  console.log("promValue2", promValue2);
  console.log("code after second promise");
}

getData();

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));
