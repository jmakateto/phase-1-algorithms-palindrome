function isPalindrome(word) {
  // Convert the input word to lowercase
  word = word.toLowerCase();

  // Initialize two pointers, one at the start and the other at the end of the word
  let start = 0;
  let end = word.length - 1;

  // Iterate until the start pointer is less than the end pointer
  while (start < end) {
    // If the characters at the start and end pointers are different, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }

    // Move the start pointer to the next character
    start++;

    // Move the end pointer to the previous character
    end--;
  }

  // If the loop completes without finding any differences, it's a palindrome
  return true;
}

module.exports = isPalindrome;
