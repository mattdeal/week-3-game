
// BEGIN GameLetter

function GameLetter (letter) {
	this.letter = letter;
	this.guessed = false;	
}

GameLetter.prototype.toString = function() {
	return this.guessed === true ? this.letter : '_';
}

// END GameLetter

// BEGIN GameWord

function GameWord(word) {
	this.letters = this.makeLetters(word);
	this.isSolved = false;
}

GameWord.prototype.makeLetters = function(word) {
	var letters = [];
	for (var x = 0, len = word.length; x < len; x++) {
		letters.push(new GameLetter(word.charAt(x)));
	}

	return letters;
}

GameWord.prototype.toString = function() {
	var output = [];
	for (var x = 0, len = this.letters.length; x < len; x++) {
		output.push(this.letters[x].toString());
	}

	return output.join(' ');
}

GameWord.prototype.handleGuess = function(guess) {
	var found = false;
	var isSolved = true;

	// iterate thru letters looking for guess and checking if the word is solved
	for (var x = 0, len = this.letters.length; x < len; x++) {
		if (this.letters[x].letter === guess) {
			this.letters[x].guessed = true;
			found = true;
		}

		if (this.letters[x].guessed === false) {
			isSolved = false;
		}
	}

	// update isSolved
	this.isSolved = isSolved;

	return found;
}

GameWord.prototype.solve = function() {
	for (var x = 0, len = this.letters.length; x < len; x++) {
		this.letters[x].guessed = true;
	}

	this.isSolved = true;
}

// END GameWord

// BEGIN Game

function Game() {
	this.MAX_GUESS_COUNT = 6;
	this.WORDS = 'red,green,blue,yellow,orange,purple,brown,black,white'.split(',');

	this.wins = 0;

	this.guessedLetters = [];
	this.currentWord = this.getNewWord();
	this.guessesRemaining = this.MAX_GUESS_COUNT;
	this.gameOver = false;
	this.gameWon = false;
}

Game.prototype.reset = function() {
	this.guessedLetters = [];
	this.currentWord = this.getNewWord();
	this.guessesRemaining = this.MAX_GUESS_COUNT;
	this.gameOver = false;
	this.gameWon = false;
}

Game.prototype.getNewWord = function() {
	return new GameWord(this.WORDS[Math.floor(Math.random() * this.WORDS.length)]);
}

Game.prototype.handleGuess = function(guess) {
	if (this.guessedLetters.indexOf(guess) < 0) {
		this.guessedLetters.push(guess);

		if (this.currentWord.handleGuess(guess) === true) {
			console.log('currentWord contains ' + guess);
		} else {
			console.log('currentWord does not contain ' + guess);
			this.guessesRemaining--;
		}

		this.checkGameState();
	} else {
		console.log('you already guessed ' + guess);
	}
}

Game.prototype.checkGameState = function() {
	// check for solved word
	if (this.currentWord.isSolved === true) {
		console.log('game over - word solved');
		this.gameWon = true;
		this.wins++;
		return;
	}

	// check for 0 remaining guesses
	if (this.guessesRemaining < 1) {
		console.log('game over - guessesRemaining < 1');
		this.gameOver = true;
		this.currentWord.solve();
	}
}

// END Game