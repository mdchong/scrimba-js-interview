/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.

Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    // Take in a string
    // Palindrome is a palindrome when words are all the same front and back
    // So reverse the string and then join it back together
    let reversed = str.split("").reverse().join("");
    
    
    // Compare and contrast each index of the string
    if (reversed === str) {
        // If they are all equal, return true
        return true;
    } else {
        return false;
    }
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));