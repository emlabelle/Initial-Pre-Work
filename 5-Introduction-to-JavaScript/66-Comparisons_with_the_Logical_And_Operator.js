// In this lesson: The logical and operator "&&" returns true only if the statements to the left and right of it BOTH return true.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
