// In this lesson: While incrementing the iterator by 1 is common, it is not the only way to write your final-expression. i += 2 will increment by 2 each loop, for example.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
