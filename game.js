function namePrompt() {
    var name = prompt("Please enter your name", "");
    if (name != null) {
        document.getElementById("name").innerHTML =
            "Hello " + name + "! How are you today?";
            
    }
}

document.body.style.padding = 20;


(function () {

    var guessesLeft, randomNumber, yourNumber, submitButton, answerDisplay, maxGuesses;

    var win = 1;
    var loss = 0;

    maxGuesses = 4;


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

    initGame();


    function initGame() {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 15 + 1); //Picks a random number
        yourNumber.value = "";
    }


    function winlossDisplay() {

        winContainer.innerHTML = "Wins: " + win;
        lossContainer.innerHTML = "Losses: " + loss;
        if(yourNumber == randomNumber){
            win++
        }else{
            loss++
        }

    }
    winlossDisplay();
    



    function checkAnswer() {

        if (yourNumber.value == randomNumber) {
            answerDisplay.innerHTML = "You win! " + randomNumber + " is correct. " +
                "Please input your next guess to start again.";
                win++;
            initGame();
            return;
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
            initGame();
        }
    }

}());


