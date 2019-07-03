// In this lesson: While variables declared with const are unable to be reassigned, objects (including arrays and functions) assigned this way are still mutable.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  let temp = s.pop();
  s.unshift(temp);


  // change code above this line
}
editInPlace();
