//create a random number for the computer decision
//pull our numbers from text
// validate agaist what number the computer is thinking of
//give us a response according to wich digts we have corrent

// var compChoice1 = Math.floor(Math.random() * 10);
// var compChoice2 = Math.floor(Math.random() * 10);
// var compChoice3 = Math.floor(Math.random() * 10);
// var computerNum = [compChoice1, compChoice2, compChoice3];
// alert(computerNum);

// global
function getRandomNum() {
    return Math.floor(Math.random() * 10)
}


var compChoice1, compChoice2, compChoice3;
var number1, number2, number3;


function startGame() {
    do {
        compChoice1 = getRandomNum();
        compChoice2 = getRandomNum();
        compChoice3 = getRandomNum();
    }
    while (compChoice1 == compChoice2 || compChoice1 == compChoice3 || compChoice2 == compChoice3);
}

document.getElementById('startGame').addEventListener('click', function() {
    startGame();
    console.log();
});



function compareUsrvsCom() {
  //Here will get the users input values
  document.getElementById('addForm').addEventListener('submit', function(e) {
      e.preventDefault();
      number1 = document.getElementById('guessNum1').value;
      number2 = document.getElementById('guessNum2').value;
      number3 = document.getElementById('guessNum3').value;
      alert('Your number Guess is  ' +  + "And the computer guess   " + )});

    var response = "";

    if (number1 == compChoice1) response += "pico  ";
    else if (number1 == compChoice2 || number1 == compChoice3) response += "fermi  ";

    if (number2 == compChoice2) response += "pico  ";
    else if (number2 == compChoice1 || compChoice2 == compChoice3) response += "fermi  ";

    if (number3 == compChoice3) response += "pico  ";
    else if (number3 == compChoice1 || number3 == compChoice2) response += "fermi  ";

    if (number1 === compChoice1 && number2 === compChoice2 && number3 === compChoice3) response = "You win";
    else return "";
    return response;
    console.log(response);
    document.getElementById("guessButn").addEventListener("click", function() {
        document.getElementById("demoBagel").innerHTML = response;
        console.log(compareUsrvsCom());
    });
}

// function getUserGuess(){
// 	var playerNum = [guessDigit1, guessDigit2, guessDigit3];
//
//   document.getElementById("guessBtn").addEventListener.("click", function(e){
//    e.preventDefault();
// 	 guessDigit1 = document.getElementById("guessNum1").value;
// 	 guessDigit2 = document.getElementById("guessNum2").value;
// 	 guessDigit3 = document.getElementById("guessNum3").value;
// alert(playerNum)};
// matchGuess();
//
// guessDigit1 === compChoice1
// guessDigit1===compChoice1
// guessDigit1===compChoice1
// });
