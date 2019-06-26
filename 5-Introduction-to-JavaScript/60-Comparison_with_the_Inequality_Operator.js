// In this lesson: the inequality operator "!=" returns true when two values are NOT equal. Like the == operator, it performs a type conversion, so data type is not taken into account.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
