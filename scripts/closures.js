function outer() {
  let c = 100;
  function x(b) {
    var a = 10;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }

  return x;
}

var close = outer()('hello');
close();