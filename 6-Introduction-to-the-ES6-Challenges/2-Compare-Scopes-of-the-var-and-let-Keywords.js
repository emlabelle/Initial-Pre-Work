// In this lesson: "var" can be used to declare a variable globally or locally within a function. "Let" can be used these ways, but is also local to any code block, statement or expression it is declared in - such as a for loop.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
