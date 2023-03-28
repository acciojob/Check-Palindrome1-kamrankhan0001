// complete the given function

function palindrome(str){
 s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the reversed string is the same as the original
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
