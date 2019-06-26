// In this lesson: The equality operator "==" compares two values and returns true if they are equivalent and false if not. It will still return true if the two values are different types, but equivalent to the same value (i.e. 1 == '1').

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
