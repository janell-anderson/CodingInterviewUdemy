// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // My solution

  return str.split('').reverse().join('');

  // My version of the for loop

  //   let newStr = '';
  //
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  //   }
  //
  //   return newStr;
module.exports = reverse;


//Stephen's 1st solution

// const arr = str.split('');
// arr.reverse();
// return arr.join('');


// Stephen's 2nd solution using a for loop
// for each character of string
// character is temporary variable that is redelcared

// let reversed = '';
// for (let character of str) {
//   reversed = character + reversed;
// }
// return reversed;

// Stephen's 3rd solution using reduce()

// reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
// ES2015
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');
//
//   //ES6
//   return str.split('').reduce((rev,char) => char + rev, '');
// }
