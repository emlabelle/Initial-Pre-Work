// In this lesson: Sometimes objects have internal variables that need to stay private. These objects have "getter" and "setter" functions that allow a user to read or modify the variable (based on an argument) without directly accessing it.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(ftemp) {
      this.ftemp = ftemp;
    }
    get ctemp() {
      return 5/9 * (this.ftemp - 32);
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
