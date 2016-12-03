
// BEGIN GameLetter

function GameLetter (letter) {
	this.letter = letter;
	this.guessed = false;	
}

GameLetter.prototype.toString = function() {
	return this.guessed === true ? this.letter : '_';
	// return this.letter + ' (' + (this.guessed === true ? 'guessed' : 'not guessed') + ')';
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
	return this.letters ? this.letters.join(' ') : '';
}

GameWord.prototype.handleGuess = function(guess) {
	var found = false;

	// iterate thru letters looking for guess
	for (var x = 0, len = this.letters.length; x < len; x++) {
		if (this.letters[x] === guess) {
			this.letters[x].guessed = true;
			found = true;
		}
	}

	return found;
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
	return this.WORDS[Math.floor(Math.random() * this.WORDS.length)];
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
	document.getElementById('wins').textContent = this.wins;

	//todo: show play again option if necessary
	// document.getElementById('wins').textContent = this.wins;

	//todo: show current word
	document.getElementById('currentWord').textContent = this.currentWord.toString();

	//todo: show guessed letters
	document.getElementById('guessedLetters').textContent = this.guessedLetters.join(',');

	//todo: show remaining guesses
	document.getElementById('guesses').textContent = this.guessesRemaining;

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