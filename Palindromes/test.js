// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // My Solution

  // let newStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   if (newStr == str[i]) {
  //     return true;
  //   } else if (newStr !== str[i]) {
  //     return false;
  //   }
  // }

  // My new Solution
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - i - 1])
    return false;
  }
    return true;

  // Solution #1
  // const reversed = str.split('').reverse().join('');
  // return str === reversed;

  // Solution #2 array.every function
  // The every() method tests whether all elements in the array pass the test implemented by the provided function.
  // return str.split('').every((char, i) => {
  //   return char === str[str.length - i - 1];
  // });
}

module.exports = palindrome;
