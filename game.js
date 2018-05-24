var secretNumber = 23;

var guess = prompt("Guess my age!");

if (Number(guess) === secretNumber) {
 alert("You guessed it!");
} else if (Number(guess) > secretNumber) {
 alert("Too high, take another shot");
} else {
 alert("Too low, take another shot!");
}