// Random number for user and pc
const userDice = Math.round(Math.random () * 5) + 1;
const computerDice = Math.round(Math.random () * 5) + 1;

// Check dice numbers
console.log("User: " + userDice + ", PC: " + computerDice);

// Declare who wins
if (userDice > computerDice) {
    console.log('%cYou win', 'color: green');
} else if (userDice < computerDice) {
    console.log('%cYou loose', 'color: red');
} else {
    console.log('%cParity', 'color: yellow');
}