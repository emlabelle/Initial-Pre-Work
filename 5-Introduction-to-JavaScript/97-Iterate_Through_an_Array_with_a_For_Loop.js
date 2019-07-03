// In this lesson: One use for a for loop is iterating through and applying a code block to each item in an array. Because an array is zero-indexed, "i = 0; i < array.length; i++" will run the code for each item in the array (array[0] to array[array.length - 1]).

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
