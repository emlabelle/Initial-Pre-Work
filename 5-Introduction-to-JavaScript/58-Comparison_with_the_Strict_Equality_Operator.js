// In this lesson: The strict equality operator "===" compares two values and returns true if they are equal INCLUDING type (1 does not === '1')

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
