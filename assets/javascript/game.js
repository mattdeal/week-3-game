
//todo: dictionary/list of words
var words;

//todo: array of letters that have been guessed
var guessedLetters;

//todo: wins
var wins = 0;

//todo: max Guesses
var MAX_GUESS_COUNT = 12;

//todo: guessesRemaining
var guessesRemaining = MAX_GUESS_COUNT;

//todo: currentWord
var currentWord;

//todo: newGame function
//reset guesses
//pick new word

class GameLetter {
	constructor (letter) {
		this.letter = letter;
		this.guessed = false;
	}

	toString() {
		console.log(this.letter + ' ' + this.guessed);
	}
}

class GameWord {
	constructor (word) {
		this.letters = this.makeLetters(word);
	}

	makeLetters(word) {
		this.letters = [];
		for (var x = 0, len = word.length; x < len; x++) {
			this.letters.push(new GameLetter(word.charAt(x)));
		}
	}

	toString() {
		for (letter in this.letters){
			console.log(letter.toString());
		}
	}	
}

class Game {
}

document.onkeyup = function(event) {
	// Captures the key press, converts it to lowercase, and saves it to a variable.
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	//todo: test against guessedLetters

	//todo: remaining guesses > 0?

	//todo: guessedLetters = currentWord?

	//testing
	var test = new GameWord('test');
	console.log(test.toString());
};