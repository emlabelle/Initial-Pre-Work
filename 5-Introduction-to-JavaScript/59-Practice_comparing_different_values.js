// In this lesson: == performs a type conversion to check if values are equal. === does not. Use the "typeof" operator to determine what type a value is.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
