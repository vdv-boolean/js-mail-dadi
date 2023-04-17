// Random number for user and pc
const userDice = Math.round(Math.random () * 5) + 1;
const computerDice = Math.round(Math.random () * 5) + 1;

// Check dice numbers
console.log("User: " + userDice + ", PC: " + computerDice);

// Declare who wins
const esite = document.querySelector('h2');
if (userDice > computerDice) {
    console.log('%cYou win', 'color: green');
    esite.innerHTML = `You win`
} else if (userDice < computerDice) {
    console.log('%cYou loose', 'color: red');
    esite.innerHTML = `You loose`
} else {
    console.log('%cParity', 'color: yellow');
    esite.innerHTML = `Parity`
}

const user = document.querySelector('.user');
const computer = document.querySelector('.computer');

if (userDice == 1) {
    user.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
} else if (userDice == 2) {
    user.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
} else if (userDice == 3) {
    user.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
} else if (userDice == 4) {
    user.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
} else if (userDice == 5) {
    user.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
} else if (userDice == 6) {
    user.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
}

if (computerDice == 1) {
    computer.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
} else if (computerDice == 2) {
    computer.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
} else if (computerDice == 3) {
    computer.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
} else if (computerDice == 4) {
    computer.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
} else if (computerDice == 5) {
    computer.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
} else if (computerDice == 6) {
    computer.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
}