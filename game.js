var secretNumber = 23;

var guess = Number(prompt("Guess my age!"));

// var stringGuess = prompt("Guess my age!");
// var guess = Number(stringGuess);

if (guess === secretNumber) {
 alert("You guessed it!");
} else if (guess > secretNumber) {
 alert("Too high, take another shot");
} else {
 alert("Too low, take another shot!");
}