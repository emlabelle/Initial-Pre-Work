// In this lesson: the strict inequality operator "!==" returns true if two values are not equal, and like the === operator, it DOES take data type into account.

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
