// In this lesson: The spread operator always results in a comma separated list, whereas destructuring allows us to pick and choose which elements are assigned to varaibles. Place commas between assignments in the left array, and the corresponding values in the right array will be assigned. To skip values in the right array without assigning them, simply omit the assignment in the left array, only using the comma. Note that const is not used here, because b and a are already defined.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
