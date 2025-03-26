/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2) {
    // take in the two strings as lowercase
    // if the two strings lengths do not equal, return false
    // sort each letter so they correspond
    // if they match each other, return true

    if (str1.length !== str2.length) {
        return false;
    }

    let stringOne = str1.toLowerCase().split("").sort().join("");

    let stringTwo = str2.toLowerCase().split("").sort().join("");
    
    return stringOne === stringTwo;
}

console.log(isAnagram("Allergy", "gallery"));