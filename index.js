var inquirer = require("inquirer");
var Word = require("./constructors/word.js");
var chalk = require("chalk");

var wordList = [
  "guinness",
  "coors",
  "budweiser",
  "corona",
  "heineken",
  "pbr"];

var randomWord = wordList[Math.floor(Math.random() * wordList.length)]

console.log(randomWord);

function startGame() {
    var guessesLeft = 10;
    var createWord = new Word(randomWord)
    createWord.createArray()

    function askForLetter() {
        var message = chalk.magenta("GUESS A LETTER");
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: message
        }]).then(function(response) {
            console.log(response.userGuess)
            if (createWord.checkGuess(response.userGuess)) {
                console.log(chalk.magenta("YAY! correct letter"));
                if (guessesLeft > 0) {
                    if (createWord.blanks.join("") !== randomWord) {
                        askForLetter();
                    } else {
                        console.log(chalk.magenta("YOU WIN!"));
                    }
                }
            } else {
                guessesLeft = guessesLeft - 1;
                if (guessesLeft <= 0) {
                    console.log(chalk.magenta("YOU LOST!"));
                } else {
                    console.log(chalk.magenta("Wrong, you have ") + guessesLeft + chalk.magenta(" guesses left."));
                    askForLetter();

                }
            }
        });
    }

    askForLetter();

}

startGame();
