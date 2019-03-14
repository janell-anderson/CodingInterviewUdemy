// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Trick 1: toString - Changes an integer into a string
  // return n.toString().split('').join('');

  // Trick 2: Math.sign() - function returns the sign of a number, indicating whether the number is positive, negative or zero
  // Math.sign(-190);

  // My Solution
  // const newNum = n.toString().split('').reverse().join('');
  // const negNum = Math.sign(newNum)
  // return parseInt(newNum);

  // New solution
  const newNum = n.toString().split('').reverse().join('');
  return parseInt(newNum) * Math.sign(n);

  // Stephen's solution
  // const reversed = n.toString().split('').reverse().join('');
  // if (n < 0) {
  //   return parseInt(reversed) * - 1;
  // }
  // return parseInt(reversed) * Math.sign(n);
}


module.exports = reverseInt;
