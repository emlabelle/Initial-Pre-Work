// In this lesson: If there are more conditions to address after the if statement has evaluated false, follow up with an else if statement. Essentially, the else statement triggers another if and else statement.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
