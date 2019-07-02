// In this lesson: Bracket notation is helpful when your property name is being stored as a variable - put the variable in the bracket (no quotes, because we want the value of the variable, not the name of the variable as a string.)

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
