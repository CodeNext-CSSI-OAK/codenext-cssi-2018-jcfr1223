function makesAbba(a, b) {
  return a + b + b + a;
}

// function comboString(a, b) {
//   if (a.length > b.length) {
//     return b + a + b;
//   }
//   return a + b + a;
// }

function lastTwo(a) {
  if (a.length < 2) {
    return a;
  }
  return a.substring(0, a.length - 2) + a.charAt(a.length - 1) + a.charAt(a.length - 2);
}

console.log(lastTwo("Please"));
