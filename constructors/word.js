var Letter = require("./letter.js");

function Word(word) {
  this.word = word;
  this.letterArray = [];
  this.blanks = [];

  this.createArray = function () {
    for (var i = 0; i < this.word.length; i++) {
    this.letterArray.push(new Letter(this.word[i]));
  }
    console.log("WORD: " + this.letterArray);
    this.createWord();
  }

  this.createWord = function() {
    for (var i = 0; i < this.letterArray.length; i++) {
      this.blanks.push(this.letterArray[i].letterGuessed())
    }
    console.log(this.blanks.join(" "));
  }

  this.checkGuess = function (userGuess) {
       var correctLetter = false;
       for (var i = 0; i < this.letterArray.length; i++) {
           if (this.letterArray[i].letterStatus(userGuess)) {
               this.blanks[i] = this.letterArray[i].letterGuessed();
              correctLetter = true;
           }
       }
       console.log(this.blanks.join(" "));
       return correctLetter
   }

}

module.exports = Word;
