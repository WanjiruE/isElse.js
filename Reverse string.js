function reverseString(str) {
    // Split the string into an array of characters
    let strArray = str.split('');
    
    // Reverse the array of characters
    let reversedArray = strArray.reverse();
    
    // Join the reversed array back into a string
    let reversedStr = reversedArray.join('');
    
    // Return the reversed string
    return reversedStr;
}

// Test cases
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("12345")); // Expected output: "54321"
console.log(reverseString("")); // Expected output: ""
