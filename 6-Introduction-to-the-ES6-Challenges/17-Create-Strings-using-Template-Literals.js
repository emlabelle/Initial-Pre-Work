// In this lesson: Strings can be created using backticks `` in place of single or double quotes. This creates a "template literal" which preserves multiline format (without inserting \n). It also allows the insertion of variables and/or expressions as ${variable}, which may be a simpler alternative to cobbling together string fragments and variables with concatenation.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [`<li class="text-warning">no-var</li>`,
    `<li class="text-warning">var-on-top</li>`,
    `<li class="text-warning">linebreak</li>`];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
