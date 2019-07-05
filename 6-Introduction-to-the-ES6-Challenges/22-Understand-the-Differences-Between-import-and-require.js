// In this lesson: Often you need to import functions and other code to other files. Require() was the ES5 method, which required the entire file to be included. ES6 uses import, which allows you to name one or more pieces of code to be brought from the other file, making for a more efficient process.

import { capitalizeString } from "string_functions"

"use strict";
capitalizeString("hello!");
