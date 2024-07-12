// create a promise
// resolve the promise after 5 seconds

const P = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

// async always returns a promise

async function getData() {
  return P;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
