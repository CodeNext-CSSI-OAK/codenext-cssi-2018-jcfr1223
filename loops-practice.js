let readline = require("readline-sync");

function containsSpace(str) {
  for (i = 0; i <str.length; i++) {
    if (str.charAt(i) === " ") {
      return true;
    }
  }
  return false;
}

function containsA(str) {
  let a = 0;
  for (i = 0; i < str.length; i++) {
    if(str.charAt(i) === "a" || str.charAt(i) === "A") {
      a++;
      return a;
    }
  }
  return 0;
}

function reverse(str) {
  let reversed = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

let hello = 5;
while (hello > 0) {
  console.log("Hello");
  hello--;
}

console.log(reverse("BANANA"));
console.log(reverse("Belen Sucks"));
console.log(reverse("Banana a."));
console.log(reverse("Julio is cool"));
console.log(reverse("This is cool"));







































// let userInput;
// let fails = 0;
//
// while (userInput !== "Password" && fails !== 3) {
//   userInput = readline.question("Enter Password: ");
//   fails++;
//   console.log("Tries: " + fails);
//   if (fails === 3) {
//     console.log("Get out of here you robot!");
//   }else {
//     console.log("Congrats");
//   }
// }
//
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet.charAt(i));
// }
//
// for (let i = 0; i <= 30; i++) {
//   console.log(i);
// }
