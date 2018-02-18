function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.letterGuessed = function() {
    if (this.guessed) {
      return this.letter;
    }
    else {
      return "_";
    }
  }
  this.letterStatus = function (userGuess) {
    if (userGuess === this.letter) {
      this.guessed = true;
      return true;
    }
    else {
      return false;
    }
  }

}

module.exports = Letter;
