



var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var blank = [];
var random = alphabet[Math.floor(Math.random() * alphabet.length)];



// Records keystrokes and shows guesses and reduces guesses left and resets
document.onkeydown = function() {
	var userGuess = event.key;
	blank.push(userGuess);
	document.getElementById("guessesSoFar").innerHTML = blank;

	var guessesRemaining = document.getElementById("guesses").innerHTML = 9 - blank.length;

	document.getElementById("wins").innerHTML = wins; 

	document.getElementById("losses").innerHTML = losses;

	if (userGuess == random) {
		wins ++;
	}
	if (guessesRemaining == 1 && userGuess != random)
	{
		losses ++;
	}


	if (blank.length >= 9) {
      blank = [];
      

      }
	// 
	// guessesLeft -= 1

	// // selects random letter
console.log(random);
console.log(blank.length);
	// //if (userGuess === indexOf(alphabet)) {
	// 	console.log("Testing " + userGuess)
	
	// 

	// if (guessesLeft = 0) {
	// 	blank = [];
	// }

}


//console.log(userGuess);






