// Author: FirstName LastName
var readline = require("readline-sync");

// global variables
var firstName, lastName, momMaidenName, cityBorn, dreamCar, street, fantasyName;

/******************************************************************************
getNewFirstName()

This function returns the user's new first name. To do so, concatenate the
first 3 letters of their real first name and the first 2 letters of their
real last name.
*******************************************************************************/

function getNewFirstName() {
  firstName = readline.question("First Name: ");
  lastName = readline.question("Last Name: ");
  return firstName.substring(0, 3) + lastName.substring(0, 2).toLowerCase();
}

/******************************************************************************
getNewLastName()

This function returns the user's new last name. To do so, concatenate the
first 2 letters of their mom's maiden name and the first 3 letters of the
city where they were born.
*******************************************************************************/

function getNewLastName() {
  momMaidenName = readline.question("Mom's Maiden Name: ");
  cityBorn = readline.question("City Born In: ");
  return momMaidenName.substring(0, 2) + cityBorn.substring(0, 3).toLowerCase();
}

/******************************************************************************
getTitle()

This function returns the user's title. To do so, concatenate the last three
letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  dreamCar = readline.question("Dream Car: ");
  let reversed = reverseString(lastName.substring(lastName.length - 3, lastName.length));
  return reversed.charAt(0).toUpperCase() + reversed.substring(1, reversed.length) + dreamCar.toLowerCase();

}

/******************************************************************************
getHonorific()

This function returns the user's full honorific. To do so, concatenate their
title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  street = readline.question("Street you live on: ");
  return " of " + street;
}

/******************************************************************************
run()

This function runs the program. At the very least it should ask the user
to answer a series of questions, each setting one of the global variables
to what the user typed in. It should then call the functions above to produce
the user's fantasy name (set fantasyName to that), and display it for the user
to see.
*******************************************************************************/

function run() {
  console.log(getNewFirstName() + " " + getNewLastName() + " " + getTitle() + getHonorific());
}

// Run the program!
run();

function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  let splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}
