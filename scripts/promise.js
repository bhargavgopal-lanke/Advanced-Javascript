// dummy promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 1000);
  // setTimeout(() => reject("p2 fail"), 1000);
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
  });

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
// whatever is the first one (success/ failure) it'll return that result.
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
// if all the promises fail it'll give u an aggregated error.
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("promise.any success ==>", res);
  })
  .catch((err) => {
    console.error("promise.any fail ==>", err);
  });
