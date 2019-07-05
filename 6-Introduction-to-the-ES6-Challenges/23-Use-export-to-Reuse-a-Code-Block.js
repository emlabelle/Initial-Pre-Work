// In this lesson: In order to import code into a new file, we must export it at its source, and there are a couple of ways to do that. The following is known as a "named export": Variables may be exported by putting export before const, while functions must be declared first and then exported between curly braces and separated by commas.

"use strict";
export const foo = "bar";
export const bar = "foo";
