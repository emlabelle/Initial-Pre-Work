// In this lesson: Local variables can have the same name as a global variable. In this case, the local value takes precedence within its scope, without affecting the value of the global variable elsewhere.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
