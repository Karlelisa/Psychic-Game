//UserGuess and ComputerGuess options in this array.
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// setting variables to keep score of the wins, loses, guessRemaining and guesses so far.
let wins = 0;
let losses = 0;
let guessRemaining = 10;
let guesses = 1;
// let lettersArray = [];


//Cited: In class activity and https://www.youtube.com/watch?v=Tio88WjwFO0
//The user makes a choice with the onkeyup function.
document.onkeyup = function (event) {
    let userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);

    //Cited: In class activity and https://www.youtube.com/watch?v=Tio88WjwFO0
    /*  The computer makes a randaom letter choise. Math.random selects a random number. The * options.length times the number by the lenght of 
     the array. This makes the code count the indexes of the letters array as 1, 2, 3 instead of 0, 1, 2. The Math.floor keeps computerGuess within 
     the array brackets and not to go beyond "x". */
    let computerChoice = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerChoice);

    // Compares the choices and determines whether a win or a lose, the guesses remaining and the guesses so far.
    if (userGuess === Letters(yourGuesses.value) {

        if (guesses === 1) {
            guesses.textContent = 'Your Guesses So Far: ';
        }
        guesses.textContent += userGuess + ' ';

        if ((userGuess === computerGuess)) {
            wins++;
            lastResult.textContent = 'Congratulations! You got it right!';

        }
        else if (guesses === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
        }

        if ((userguess !== computerGuess)) {
            losses++;
            lastResult.textContent = 'Oh no you guessed wrong!';

        }

        else {
            guessRemaining--;
            guessRemaining.textContent = 'Guesses Left: ';
        }


        guesses++;
        yourGuesses.value = '';

        //Cited: https://www.youtube.com/watch?v=Tio88WjwFO0
        /*Inserting the HTML in Javascript. This will update the html as the javascript wins, losses, guesses remaining and gueses 
        left. */
        let html = "<p> Guess What Letter I'm Thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessRemaining + "</p>" +
            "<p>Your Guesses So Far: " + guesses + "</p>";


        document.querySelector('#game').innerHTML = html;
    }




}