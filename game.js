function namePrompt() {
    var name = prompt("Please enter your name", "");
    if (name != null) {
      document.getElementById("name").innerHTML =
      "Hello " + name + "! How are you today?";
    }
  }




  (function () {

    var guessesLeft, randomNumber, yourNumber, submitButton, answerDisplay, maxGuesses;
    

    maxGuesses = 3;

    // Load all the element references from the DOM
    // so that we don't need to do that every time we chek the answer
    guessInput = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");

    // Let's use a DIV element to display the answer.
    // It's nicer than using alert().
    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "Please make a guess!";

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        randomNumber = Math.floor(Math.random() * 100 + 1); //Picks a random number
        yourNumber.value = "";
    }

    function checkAnswer () {

        if (yourNumber.value == randomNumber) {
            answerDisplay.innerHTML = "You win! " + randomNumber + " is correct. " +
                "Please input your next guess to start again.";
            initGame();
            return;
        }
        else if (yourNumber.value > randomNumber) {
            answerDisplay.innerHTML = "Too dame high fool!";
        }
        else {
            answerDisplay.innerHTML = "Too low!";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML += " No guesses left - you lost!";
            initGame();
        }
    }

}());
