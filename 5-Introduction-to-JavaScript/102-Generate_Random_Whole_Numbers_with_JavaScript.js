// In this lesson: Math.random() can easily be used to create a random number between 0 and n by multiplying the fraction by n+1 and passing the result to Math.floor(), whichrounds a number down to the nearest whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
