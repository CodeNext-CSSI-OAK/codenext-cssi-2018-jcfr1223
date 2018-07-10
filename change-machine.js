// Author: FirstName LastName

let readline = require('readline-sync');

console.log("**************************************************************************");

let centsString = readline.question('Cents: ');
let cents = Number(centsString);

let a = Math.floor(cents / 25);
let b = cents % 25;
let c = Math.floor(b / 10);
let d = b % 10;
let e = Math.floor(d / 5);
let f = d % 5;
let g = Math.floor(f / 1);

console.log(cents + " cents make:");
console.log(a + " Quarters");
console.log(c  + " Dimes");
console.log(e + " Nickles");
console.log(g + " Pennies");

console.log("Thank you for using this service");
console.log("**************************************************************************");
