/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str) {
    // Create an empty object to hold the counts
    let count = {};

    // Convert the string to lowercase and remove spaces
    str = str.toLowerCase().replaceAll(' ', '');

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is already in the count object
        if (count[str[i]]) {
            // If it is, increment the count
            count[str[i]] += 1;
        } else {
            // If it isn't, add it to the object with a count of 1
            count[str[i]] = 1;
        }
    }

    return count;
}

console.log(countChars("Peggy Porth"));