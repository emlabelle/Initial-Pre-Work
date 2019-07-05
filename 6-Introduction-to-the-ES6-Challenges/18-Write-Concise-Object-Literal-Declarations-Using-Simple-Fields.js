// In this lesson: When declaring an object literal, you may find yourself assigning values from arguments to props with the same name. Instead of writing "x: x, y: y" ES6 allows you to simply write "x, y".

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
