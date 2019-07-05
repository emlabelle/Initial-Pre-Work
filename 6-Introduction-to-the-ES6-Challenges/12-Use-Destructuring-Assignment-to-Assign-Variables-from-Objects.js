// In this lesson: Destructuring assignment is a way to unpack an object, similarly to using the spread operator with an array. One or more variables are determined to the left of the assignment operator, along with the properties those values are associated with in the object to the right of the assignment operator.

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
