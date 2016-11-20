// global V
var compChoice1, compChoice2, compChoice3;
var number1, number2, number3;
var response;
//functions to create random numbers
function getRandomNum() {
    return Math.floor(Math.random() * 10)
}

function startGame(){
    do{
        compChoice1 = getRandomNum();
        compChoice2 = getRandomNum();
        compChoice3 = getRandomNum();
    }
    while (compChoice1 == compChoice2 || compChoice1 == compChoice3 || compChoice2 == compChoice3);
}


//here we'll get the usr Numnber
function userNum(){
   number1 = parseInt(document.getElementById('guessNum1').value);
   number2 = parseInt(document.getElementById('guessNum2').value);
   number3 = parseInt(document.getElementById('guessNum3').value);
   console.log(number1,number2,number3, typeof number1);
}
// Compare Usr numbers vs computer ramdom nums
function compareUsrvsCom(){

    var response = "";


    if (number1 === compChoice1) response += "pico  ";
    else if (number1 === compChoice2 || number1 == compChoice3) response += "fermi  ";


    if (number2 === compChoice2) response += "pico  ";
    else if (number2 === compChoice1 || number2 === compChoice3) response += "fermi  ";


    if (number3 === compChoice3) response += "pico  ";
    else if (number3 === compChoice1 || number3 === compChoice2) response += "fermi  ";




    if (number1 === compChoice1 && number2 === compChoice2 && number3 === compChoice3) response = "You win";
    else if (response == "" ) return ("beagls   ")


     return response;
    // return response;
   }
   //Start game Btn
   document.getElementById('startGame').addEventListener('click', function() {
       startGame();
       console.log(compChoice1,compChoice2, compChoice3);
   });

   document.getElementById("guessButn").addEventListener("click", function() {
     userNum();
     compareUsrvsCom();
     console.log(compareUsrvsCom());
       document.getElementById("demoBagel").innerHTML += compareUsrvsCom();
     });
