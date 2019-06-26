// In this lesson: A variable declared outside of any code block can be read and used by all of your code ("global scope"). A variable declared inside a code block, however, is only available within that code block, which is useful. Declaring a variable without using var, however, automatically makes it global, no matter where you've declared it. This causes problems and should be avoided.

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
