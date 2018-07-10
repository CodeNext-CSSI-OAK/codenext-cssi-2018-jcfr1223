// Author: Julio Flores
let readline = require('readline-sync');

console.log("Welcome to Super Easter Predictor!");

let year = Number(readline.question("Please Enter a Year Greater than 1582: "));

let y = year;
let a = (y % 19);
let b = Math.floor(y / 100);
let c = (y % 100);
let d = Math.floor(b / 4);
let e = (b % 4);
let f = Math.floor((b + 8) / 25);
let g = Math.floor((b - f + 1) / 3);
let h = ((19 * a + b - d - g + 15) % 30);
let i = Math.floor(c / 4);
let k = (c % 4);
let r = ((32 + 2 * e + 2 * i - h - k) % 7);
let m = Math.floor((a + 11 * h + 22 * r) / 451);
let n = Math.floor((h + r - 7 * m + 114) / 31);
let p = ((h + r - 7 * m + 114) % 31);

console.log("Easter in the year " + y + " will be on " + n + "/" + (p+1));
console.log("Goodbye!");
