


//todo: newGame function
//reset guesses
//pick new word

// BEGIN GameLetter

function GameLetter (letter) {
	this.letter = letter;
	this.guessed = false;	
}

GameLetter.prototype.toString = function() {
	return this.letter + ' (' + (this.guessed === true ? 'guessed' : 'not guessed') + ')';
}

// END GameLetter

// BEGIN GameWord

function GameWord(word) {
	this.letters = this.makeLetters(word);
}

GameWord.prototype.makeLetters = function(word) {
	var letters = [];
	for (var x = 0, len = word.length; x < len; x++) {
		letters.push(new GameLetter(word.charAt(x)));
	}

	return letters;
}

GameWord.prototype.toString = function() {
	return this.letters ? this.letters.join(',') : '';
}

GameWord.prototype.handleGuess = function(guess) {
	//todo: iterate thru letters looking for guess
	//todo: if guess is found, set local var to true, set letter.guessed = true
	//todo: return true if the letter was found
}

// END GameWord

// BEGIN Game

function Game() {
	this.MAX_GUESS_COUNT = 12;
	this.WORDS = 'red,green,blue,yellow,orange,purple,brown,black,white'.split(',');

	this.wins = 0;

	this.guessedLetters = [];
	this.currentWord = this.getNewWord();
	this.guessesRemaining = MAX_GUESS_COUNT;
}

Game.prototype.reset = function() {
	this.guessedLetters = [];
	this.currentWord = this.getNewWord();
	this.guessesRemaining = MAX_GUESS_COUNT;
}

Game.prototype.getNewWord = function() {
	//todo: return random word from this.WORDS as a GameWord
}

Game.prototype.handleGuess = function(guess) {
	//todo: call currentWord.handleGuess(guess)
	//todo: if result is true, add letter to guessedLetters
	//todo: if result is false, reduce guessesRemaining
	//todo: check for gameover/win
	//todo: update ui
}

// END Game

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