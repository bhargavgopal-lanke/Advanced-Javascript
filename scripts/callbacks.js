 // using callback is a powerful way to do asynchronous thing in js
      // so we can take a peice of code inside a function and we can pass it as a callback
      // which can  be executed later point of time.
      setTimeout(function () {
        console.log("callback");
      }, 5000);

      // callback example
      const cart = ["shoes", "cars", "bikes"];

      // api's are dependent on one after the other
      // this type of code structure is unreadable and unmaintainable.
      // inversion of control
      // api.createOrder(cart, function (orderId) {
      //   api.proceedToPayment(orderId, function (paymentInfo) {
      //     api.showSummaryPage(paymentInfo, function () {
      //       api.updateWalletBalance();
      //     });
      //   });
      // });

      // callback hell with promise
      createOrder(cart)
        // what ever is the response of createOrder should pass into this below chain
        .then(function (orderId) {
          return proceedToPayment(orderId);
        })
        // whatever is the response of proceedToPayment should pass into the below chain
        .then(function (paymentInfo) {
          return showSummaryPage(paymentInfo);
        })
        // whatever is the response of showSummaryPage should pass into the below chain
        .then(function (paymentInfo) {
          console.log(paymentInfo)
        })
        .catch(function(err) {
          console.log(err.message);
        });


        function createOrder(cart) {

        }

      // callback hell with promise and arrow functions

      // createOrder(orderId)
      //   .then((orderId) => proceedToPayment(orderId))
      //   .then((paymentInfo) => showSummaryPage(paymentInfo))
      //   .then((paymentInfo) => updateWalletBalance(paymentInfo));