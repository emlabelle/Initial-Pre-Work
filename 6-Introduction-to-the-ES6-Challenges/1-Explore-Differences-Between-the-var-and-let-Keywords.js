// In this lesson: An issue with "var" is that it does not prevent you declaring the same variable twice, which can lead to an unintended override of a variable. A variable can only be declared with the "let" keyword once.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
