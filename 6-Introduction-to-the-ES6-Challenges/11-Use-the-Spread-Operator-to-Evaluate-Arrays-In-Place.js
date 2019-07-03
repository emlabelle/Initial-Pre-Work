// In this lesson: The spread operator looks like the rest operator but is used differently. It inputs the elements of an array as seperate elements (not an array), but only in a place that expects multiple parameters or elements, such as a function or another array - it will not work standalone.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
