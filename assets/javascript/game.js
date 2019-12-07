

document.body.style.padding = 20;


(function () {

    var guessesLeft, randomNumber, yourNumber, submitButton, answerDisplay, maxGuesses, name;

    var win = 0;
    var loss = 0;

    maxGuesses = 5;


    yourNumber = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");

    var winContainer = document.getElementById("win");
    var lossContainer = document.getElementById("loss");

    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "Please make a guess!";



    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });
    document.getElementById('namePrompt').addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        namePrompt();
    });

    initGame();


    function initGame() {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 15 + 1); //Picks a random number
        yourNumber.value = "";
    }


    function winlossDisplay() {

        winContainer.innerHTML = "Wins: " + win;
        lossContainer.innerHTML = "Losses: " + loss;

    }
    winlossDisplay();




    function checkAnswer() {

        if (yourNumber.value === randomNumber) {
            if (name) {
                answerDisplay.innerHTML = "You win " + name + "! " + randomNumber + " is correct. " +
                    "Please input your next guess to start again.";
            } else {
                answerDisplay.innerHTML = "You win! " + randomNumber + " is correct. " +
                    "Please input your next guess to start again.";
            }
            win++;
            winlossDisplay();
            initGame();
            
        }
        else if (yourNumber.value > randomNumber) {
            answerDisplay.innerHTML = "Too high fool!";

        }
        else {
            answerDisplay.innerHTML = "Too low!";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML += " No guesses left - you lost!";
            loss++;
            winlossDisplay();
            initGame();
        }
    }

    function namePrompt() {
        name = prompt("Please enter your name", "");
        if (name != null) {
            document.getElementById("name").innerHTML =
                "Hello " + name + "! How are you today?";

        }
    }

}());


