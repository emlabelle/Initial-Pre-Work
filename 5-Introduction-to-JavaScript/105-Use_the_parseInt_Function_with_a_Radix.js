// In this lesson: Use the parseInt() function with a radix as the second argument to specify the base of the number in the string (binary, base 10, base 16, etc).

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
