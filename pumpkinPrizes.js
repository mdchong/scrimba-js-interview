
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// function flatten(arr){
//     return arr.flat();
// }

function flatten(arr) {
    // Initialize a new empty array
    const newArr = [];

    // Loop through the passed in array and check - string or array?
    arr.forEach(element => {
        if (Array.isArray(element)) {
            // If array, loop through it, pushing each item into the array
            element.forEach(item => newArr.push(item))
        } else {
            // If the item is string, push into the new array
            newArr.push(element);
        }
    })

    // Return new Array
    return newArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
