// In this lesson: If a default parameter is specified, the function will run when called even if no argument is supplied - the default value will be used.

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
