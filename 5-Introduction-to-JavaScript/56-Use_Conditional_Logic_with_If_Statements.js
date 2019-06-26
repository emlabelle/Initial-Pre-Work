// In this lesson: an "if" statement is a code block that checks to see whether a condition evaluates as true. Only a true result will cause the code to execute.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
