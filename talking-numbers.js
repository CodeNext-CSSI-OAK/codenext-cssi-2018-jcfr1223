// Author: FirstName LastName
var readline = require("readline-sync");

/******************************************************************************
printGreeting()

Prints a simple greeting. Be as creative as you want here. Be sure to include
your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log("By: Julio Flores");
}

/******************************************************************************
This function takes a number between 1 and 9 (inclusive) as input and returns
that same number in word form. If the number is not between 1 and 9, the
function returns an empty string, which is just "".

Examples:
sayZeroNine(5) → "five"
sayZeroNine(8) → "eight"
sayZeroNine(13) → ""
*******************************************************************************/
function sayZeroNine(num) {
  if (num === 1) {
    return "one";
  }else if (num === 2) {
    return "two";
  }else if (num === 3) {
    return "three";
  }else if (num === 4) {
    return "four";
  }else if (num === 5) {
    return "five";
  }else if (num === 6) {
    return "six";
  }else if (num === 7) {
    return "seven";
  }else if (num === 8) {
    return "eight";
  }else if (num === 9) {
    return "nine";
  }else {
    return "";
  }
}

/******************************************************************************
This function takes a number between 10 and 19 (inclusive) as input and returns
that same number in word form. If the number is not between 10 and 19, the
function returns an empty string, which is just "".

Examples:
sayTenNineteen(11) → "eleven"
sayTenNineteen(15) → "fifteeen"
sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {
  if (num === 10) {
    return "ten";
  }else if (num === 11){
    return "eleven";
  }else if (num === 12) {
    return "twelve";
  }else if (num === 13) {
    return "thirteen";
  }else if (num === 14) {
    return "fourteen";
  }else if (num === 15) {
    return "fifteen";
  }else if (num === 16) {
    return "sixteen";
  }else if (num === 17) {
    return "seventeen";
  }else if (num === 18) {
    return "eighteen";
  }else if (num === 19) {
    return "nineteen";
  }else {
    return "";
  }
}

/******************************************************************************
This function takes a number between 2 and 9 (inclusive) as input and returns
that same number in word form, but in the tens place. If the number is not
between 2 and 9, the function returns an empty string, which is just "".

Examples:
sayTwentyNinety(5) → "fifty"
sayTwentyNinety(8) → "eighty"
sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {
  if (num === 2) {
    return "twenty";
  }else if (num === 3) {
    return "thirty";
  }else if (num === 4) {
    return "fourty";
  }else if (num === 5) {
    return "fifty";
  }else if (num === 6) {
    return "sixty";
  }else if (num === 7) {
    return "seventy";
  }else if (num === 8) {
    return "eighty";
  }else if (num === 9) {
    return "ninety";
  }else {
    return "";
  }
}

/******************************************************************************
This function calls the three functions above to convert an entire number (num)
into word form, then returns that word. This function should be able to handle
numbers from 0 to 9999 (inclusive).

To do this, first declare a variable named wordForm at the top of the
function. This will be the string you will return at the end of the function,
so initialize it to an empty string at the start: var wordForm = "";

Your first conditional statement should check if num is equal to 0. If so,
set wordForm to the string "zero".

Otherwise, build the word form of num by chopping num into thousands,
hundreds, tens, and ones. Convert each place value number to a word by calling
the three functions above, and concatenate each word with the wordForm variable.

At the very end of your function it should simply return wordForm.

Examples:
sayNumber(0) → "zero"
sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {
  let wordForm = "";
  if (num === 0) {
    wordForm = "zero";
  }else {
    let onesNum = Math.floor(num % 10);
    let ones = sayZeroNine(onesNum);
    let tensNum = Math.floor((num % 100) / 10);
    let tens = sayTwentyNinety(tensNum);
    let teen = sayTenNineteen(num % 100);
    let hundredsNum = Math.floor((num % 1000)/100);
    let hundreds = sayZeroNine(hundredsNum) + "-hundred";
    let thousandsNum = Math.floor(num / 1000);
    let thousands = sayZeroNine(thousandsNum) + "-thousand";

    if (thousandsNum !== 0) {
      wordForm += thousands + " ";
    }
    if (hundredsNum !== 0) {
      wordForm += hundreds + " ";
    }
    if (tensNum !== 0 && tensNum > 1) {
      wordForm += tens + " ";
    }
    if (onesNum !== 0 && tensNum > 1 || tensNum === 0) {
      wordForm += ones + " ";
    }else {
      wordForm += teen + " ";
    }
  }
  return wordForm;
}


/******************************************************************************
This function simply runs your program. At the very least it should greet the
user, ask the user to enter a number between 0 and 9999, then print that
number in word form.
*******************************************************************************/
function run() {
  printGreeting();
  let num = readline.question("Please enter a number from 0 to 9999: ");
  console.log("Word From: " + sayNumber(num));
}

// Run the program!
run();
