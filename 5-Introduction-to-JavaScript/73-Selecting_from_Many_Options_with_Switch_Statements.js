// In this lesson: An alternate way to coordinate many options is the switch statement, which compares a value to several case options and executes the code blocks of cases that match. If a break is encountered after a code block, JavaScript will stop executing statements - otherwise, it will continue on to evaluate the next case.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
