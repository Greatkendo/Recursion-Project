function isPalindrome(str) {
  // Step 1: Clean the string (remove spaces, punctuation, and make lowercase)
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Define the recursive function
  function checkPalindrome(s) {
    // Base case: A string with 0 or 1 character is a palindrome
    if (s.length <= 1) {
      return true;
    }

    // Check if the first and last characters are the same
    if (s[0] !== s[s.length - 1]) {
      return false;
    }

    // Recursive case: Call the function with the middle substring
    return checkPalindrome(s.slice(1, s.length - 1));
  }

  // Step 3: Call the recursive function with the cleaned string
  return checkPalindrome(cleanStr);
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No lemon, no melon")); // true
console.log(isPalindrome("Hello")); // false
