/*
    Write a function that takes in one word and capitalizes the first letter of that word.

    Example input: "scrimba"
    Example output: "Scrimba"

    Hint: slice() and .toUpperCase()
*/

function capitalizeWord (word) {
    return word[0].toUpperCase() + word.slice(1);
}

/*
    Now write a function that capitalizes every word in a sentence. How can you reuse the function you just wrote?
*/

function toTitleCase(str) {
    let myArray = str.split(" ");

    myArray = myArray.map(word => capitalizeWord(word))

    return myArray.join(" ");
}

console.log(capitalizeWord("pumpkin"))
console.log(toTitleCase("pumpkin pranced purposefully across the pond"))