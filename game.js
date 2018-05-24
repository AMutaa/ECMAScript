var secretNumber = 23;

var guess = Number(prompt("Guess my age!"));

if (guess === secretNumber) {
 alert("You guessed it!");
} else if (guess > secretNumber) {
 alert("Too high, take another shot");
} else {
 alert("Too low, take another shot!");
}