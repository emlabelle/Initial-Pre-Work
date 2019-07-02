
// In this lesson: Omitting the break statement allows JavaScript to keep matching cases and executing statements. If several cases result in the same output, you can put them all in front of the same output statement (with no breaks) and the statement will execute if any one of them is matched.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
