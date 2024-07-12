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

function validateCart(cart) {
  return false;
}