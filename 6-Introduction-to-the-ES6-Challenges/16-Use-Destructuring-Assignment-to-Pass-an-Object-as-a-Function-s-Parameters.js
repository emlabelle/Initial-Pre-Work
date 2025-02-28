// In this lesson: In ES6, objects can be destructured within the function call itself by invoking in curly braces only the values needed as arguments. This is more concise code, and only involves the parts of the object you are actually going to use.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return ({max, min}) => {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
