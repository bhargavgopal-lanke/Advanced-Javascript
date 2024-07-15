
// dummy promises
const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 success"), 3000);
  setTimeout(() => reject("p1 fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("p3 success"), 2000);
  setTimeout(() => reject("p3 fail"), 2000);
});

// promise.all example
// after 3 secs it'll give the all success promises result
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("promise.all success ==>", res);
  })
  .catch((err) => {
    // if we console.error it'll look like an error.
    console.error("promise.all fail ==>", err);

const cart = ["shoes", "pants", "lehanga"];

const gitHubUrl = "https://api.github.com/users/akshaymarch7";

let response;
// fetch functions return us a prmoise
const userObject = fetch(gitHubUrl);

console.log("userObject", userObject);

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// this is another way to create a promise
// Producer end
// resolve and reject parameters are given by javascript.

function createOrder() {
  const promise = new Promise(function (resolve, reject) {
    // so our promise should return a success or failure.

    // create order
    // validate order
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }

  });
  return promise;
}


// promise.allsetteled example
// it'll wait for all the promises and return the combined result.
// it's only return the results once all the promises are resolved.
// it'll give an object
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("promise.allSetteled success ==>", res);
  })
  .catch((err) => {
    console.error("promise.allSetteled fail ==>", err);
  });

// promise.race example
// whatever is the first one (success/failure) it'll return that result.
// whatever takes less time it'll be returned first.
// the result will be the first setteled promise.
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("promise.race success ==>", res);
  })
  .catch((err) => {
    console.error("promise.race fail ==>", err);
  });

// promise.any example
// promise.any will wait for the first resolved/settled success.
// if all the promises fail it'll give u an aggregate error.
//
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("promise.any success ==>", res);
  })
  .catch((err) => {
    console.error("promise.any fail ==>", err);
    console.error("promise.any fail ==>", err.errors);
  });

function validateCart(cart) {
  return false;
}

