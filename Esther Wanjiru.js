// Function: isPalindrome
// Description: Checks if a given string is a palindrome.
// Parameters:
// - str: A string to be checked for palindrome.
// Returns:
// - true if the string is a palindrome, false otherwise.
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the processed string with its reversed version
    return processedStr === processedStr.split('').reverse().join('');
}

// Test Case 1: Input string is "radar". Expected output: true
console.log(isPalindrome("radar") === true);

// Test Case 2: Input string is "Hello". Expected output: false
console.log(isPalindrome("Hello") === false);

// Test Case 3: Input string is "A man, a plan, a canal, Panama!". Expected output: true
console.log(isPalindrome("A man, a plan, a canal, Panama!") === true);

// Test Case 4: Input string is "12321". Expected output: true
console.log(isPalindrome("12321") === true);

// Test Case 5: Input string is "Racecar". Expected output: true
console.log(isPalindrome("Racecar") === true);
