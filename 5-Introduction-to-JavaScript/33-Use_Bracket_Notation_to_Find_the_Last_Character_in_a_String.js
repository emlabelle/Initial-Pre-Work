// In this lesson: To find the value of the last character in a string, instead of counting the number of characters in the string up from 0, you can use variable[variable.length - 1]. You need to include the "-1" because the first character is at index 0, not 1. variable[variable.length] is beyond the end of the string.

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
