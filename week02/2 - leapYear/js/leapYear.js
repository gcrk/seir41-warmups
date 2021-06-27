
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
//
// Test Data... Make sure it is working!
//
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
//
// How to structure it...
//
// - We want a custom function called isLeapYear, that takes one parameter which is year, and outputs either true or false
//
// Bonus!
//
// - Ask the user what number they want to test

//write a leap year function
// divisible by 4
// except if evenly divisible 100
// unless it is divisible 400

let year = Number(prompt("What year would you like to test?"))

const isLeapYear = function(year) {

  if (year % 400 === 0){
    return true;
  } else if (year % 100 === 0){
    return false;
  } else if (year % 4 === 0){
    return true;
  } else {
    return false;
  }
}

// console.log(isLeapYear(1997));
// console.log(isLeapYear(1996));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));

console.log(isLeapYear(year));
