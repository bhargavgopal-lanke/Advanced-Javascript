"use strict";

// this value depends on how the function is called.

// this in global space

console.log(this);

// this inside a function

function x() {
  // this in strict mode - (this substitution)
  // the value depends on the strict / non strict mode
  console.log(this);
}

// in strict mode if the function is called without any reference the value of this is undfined.
x();

// if we call the function like this strict mode it'll return the window object.
window.x();

// if the functions is called from strict mode this inside of function will return undefined.

// if the function is called under non strict mode this will return window.

// in the global space this will always return the window
