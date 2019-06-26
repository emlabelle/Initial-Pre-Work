// In this lesson: A variable declared within a function is considered "locally scoped" as it is only available within that function. Function parameters are also locally scoped to their function.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "it's-a me, Mario!"
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
