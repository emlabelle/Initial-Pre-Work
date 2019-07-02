// In this lesson: It is important to pay attention to the order of your if / else statements, as JavaScript executes top to bottom and putting statements out of order can cause erroneous outputs.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
