// In this lesson: "Const" behaves like let, except the variable is read-only and cannot be reassigned. Generally these variables are named in all caps with underscores separating words.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
