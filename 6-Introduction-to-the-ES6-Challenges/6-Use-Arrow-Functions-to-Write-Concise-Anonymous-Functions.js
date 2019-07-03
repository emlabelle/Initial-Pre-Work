// In this lesson: Some functions only exist as arguments to another function. ES6 provides the following way to write inline functions. If the body of the function is only a return value, the brackets and return keyword can be omitted as well, allowing for a one line statement that behaves identically to the fully written-out function.

const magic = () => {
  "use strict";
  return new Date();
};
