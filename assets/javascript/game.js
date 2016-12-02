


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

GameWord.prototype.solve = function() {
	for (var x = 0, len = this.letters.length; x < len; x++) {
		this.letters[x].guessed = true;
	}
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
	this.gameOver = false;
	this.gameWon = false;
}

Game.prototype.reset = function() {
	this.guessedLetters = [];
	this.currentWord = this.getNewWord();
	this.guessesRemaining = MAX_GUESS_COUNT;
	this.gameOver = false;
	this.gameWon = false;
}

Game.prototype.getNewWord = function() {
	//todo: return random word from this.WORDS as a GameWord
}

Game.prototype.handleGuess = function(guess) {
	if (this.guessedLetters.indexOf(guess) < 0) {
		guessedLetters.push(guess);

		if (currentWord.handleGuess(guess) === true) {
			console.log('currentWord contains ' + guess);
		} else {
			console.log('currentWord does not contain ' + guess);
			this.guessesRemaining--;
		}

		this.checkGameState();
		this.updateUi();
	} else {
		console.log('you already guessed ' + guess);
	}
}

Game.prototype.checkGameState = function() {
	// check for 0 remaining guesses
	if (this.guessesRemaining < 1) {
		console.log('game over guessesRemaining < 1');
		this.gameOver = true;
		this.currentWord.solve();
	}

	// check for solved word
	if (this.currentWord.isSolved() === true) {
		console.log('game over - word solved');
		this.gamewon = true;
		this.wins++;
	}
}

Game.prototype.updateUi = function() {
	//todo: show status ongoing, win, lose
	//todo: show play again option if necessary

	//todo: show wins
	//todo: show current word
	//todo: show guessed letters
	//todo: show remaining guesses
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

	console.log('----');

	test.solve();

	console.log(test.toString());
};