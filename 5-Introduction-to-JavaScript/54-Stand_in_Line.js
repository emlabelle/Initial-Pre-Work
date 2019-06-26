// In this lesson: A queue is a conceptual way to store data. Imagine a line of items, where new items are added to the back, and old items are removed from the front, much like a line at the grocery store. This concept can be simulated with an array and a function that adds new items to the end of the array (with .push()) and removes old items from the front (with .shift()).

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var returnedItem = arr.shift();
  return returnedItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
