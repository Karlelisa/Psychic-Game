//UserGuess and ComputerGuess options in this array.
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// setting variables to keep score of the wins, loses, guessRemaining and guesses so far.
let wins = 0;
let losses = 0;
//let ranLetters = letters
let guessRemaining = 10;
let yourGuesses = [];
let answerArray = [];
//const myMusic;

for (let i = 0; i < 10; i++) {

}

//Cited: In class activity and https://www.youtube.com/watch?v=Tio88WjwFO0
//The user makes a choice with the onkeyup function.
document.onkeyup = function (event) {
    let userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userGuess);
    // console.log(event.keyCode);



    //Cited: In class activity and https://www.youtube.com/watch?v=Tio88WjwFO0
    /*  The computer makes a randaom letter choise. Math.random selects a random number. The * options.length times the number by the lenght of 
     the array. This makes the code count the indexes of the letters array as 1, 2, 3 instead of 0, 1, 2. The Math.floor keeps computerGuess within 
     the array brackets and not to go beyond "x". */
    let computerChoice = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerChoice);

    //Play backround music
    /*  myMusic = new sound(" ");
     myMusic.play(); */


    // Compares the choices and determines whether a win or a lose, the guesses remaining and the guesses so far.


    if (userGuess === computerChoice) {
        wins++;
        //userGuess++;
        guessRemaining--;

        // congrats.textContent = 'Congratulations! You got it right!';
        // congrats.style.backgroundColor = 'blue';
        // const congrats = document.getElementById("game");


    } else if ((userGuess !== computerChoice)) {
        losses++;
        //userGuess++;
        guessRemaining--;


    }

    // Tracking your guesses. Your guesses start at zero and adds by one everytime a win or lose. Once your guesses reaches 10, the game is over

    /* 
        if (yourGuesses === 1) {
    
            yourGuesses.textContent = 'Your Guesses So Far: ';
        }
        yourGuesses.textContent += userGuess + ' '; */
    //const guesses = document.querySelector('.guesses');

    //answerArray.join(" ");
    /*   } else if (yourGuesses === 10) {
          gameOver();
      }  */






    // lettersArray = [];

    //When the player's guessRemaining reaches 10 then it is game over. The player has 10 time to either win or loose.
    for (let i = 10; i < 10; i++) {
        if (guessRemaining = 10) {
            guessRemaining--;
        } else if (guessRemaining === 0) {
            gameOver();
        }


    }


    // When the game is over if your wins are greater than your losses then you won that round. If not, then you lost that round.
    /* function gameOver() {

        if (wins > losses) {
            youWon.textContent = 'Game Over!! Congrats, You Won This Round!!';

        } else if (losses > wins) {
            youLost.textContent = 'Game Over!! You Lost This Round!';



        }

        const youWon = document.getElementById("game")
        const youLost = document.getElementById("game") */


    // if (guesses === 10) {
    //     lastResult.textContent = '!!!GAME OVER!!!';
    //     const lastResult = document.getElementById("game");
    // }

    // if (guesses > losses) {
    //     youWon.textContent = 'You Won This Round!';
    // } else if (losses > guesses) {
    //     youLost.textContent = 'You Lost This Round!';
    // }
    // const youWon = document.getElementById("game")
    // const youLost = document.getElementById("game")









    /*  if ((guesses === 1)) {
     
         guesses.textContent = 'Your Guesses So Far: ';
     }
     guesses.textContent += userGuess + ' ';
     const guess = document.getElementById("game");
     
     if ((userGuess === computerChoice)) {
         wins++;
         gotRight.textContent = 'Congratulations! You got it right!';
           const gotRight = document.getElementById("game");
     
     }
     else if ((guesses === 0)) {
         losses++;
         lastResult.textContent = '!!!GAME OVER!!!';
        const lastResult = document.getElementById("game");
     }
     
     
    
    //Cited: https://www.youtube.com/watch?v=Tio88WjwFO0
    /*Inserting the HTML in Javascript. This will update the html as the javascript wins, losses, guesses remaining and guesses 
       left. */
    let html =
        "<h1>Guess What Letter I'm Thinking of.....</h1>" +
        "<h4>Press any letter to start playing!</h4>" +
        "<h5>Wins: " + wins + "</h5>" +
        "<h5>Losses: " + losses + "</h5>" +
        "<h5>Guesses Left: " + guessRemaining + "</h5>" +
        "<h5>Your Guesses So Far: " + userGuess + "</h5>";


    document.querySelector('#game').innerHTML = html;



}



