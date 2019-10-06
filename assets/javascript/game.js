//UserGuess and ComputerGuess options in this array.
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// setting variables to keep score of the wins, loses, guessRemaining and guesses so far.
let wins = 0;
let losses = 0;
let guessRemaining = 10;
let answerArray = [];



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


    // Compares the choices and determines whether a win or a lose, the guesses remaining and the guesses so far.

    if (userGuess === computerChoice) {
        wins++;
        alert('Oh lucky you... You guessed right! You WIN!!');
        resetGame();



    } else if ((userGuess !== computerChoice)) {
        losses++;
        guessRemaining--;
        answerArray.push(userGuess);
    }

    //The player has 10 times to guess the right letter. When the player's guessRemaining reaches 10 then player looses and it is game over. 

    if (guessRemaining === 0) {
        console.log('no more guesses')
        alert("!!!GAME OVER, YOU LOST!!!");
        resetGame();
    }




    // This resets the game after the player wins or looses.
    function resetGame() {
        wins = 0;
        losses = 0;
        guessRemaining = 10;
        answerArray = [];
    }




    //Cited: https://www.youtube.com/watch?v=Tio88WjwFO0
    /*Inserting the HTML in Javascript. This will update the html as the javascript wins, losses, guesses remaining and guesses 
       left. */
    let html =
        "<h1>Guess What Letter I'm Thinking of.....</h1>" +
        "<h4> You only have 10 tries to guess my letter...Good Luck...</h4>" +
        "<h4>Press any letter to start guessing!</h4>" +
        "<h5>Wins: " + wins + "</h5>" +
        "<h5>Losses: " + losses + "</h5>" +
        "<h5>Guesses Left: " + guessRemaining + "</h5>" +
        "<h5>Your Guesses So Far: " + answerArray + "</h5>";


    document.querySelector('#game').innerHTML = html;




}



