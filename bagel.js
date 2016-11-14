
//
// function bagelBtn() {
// var v = Math.floor((Math.random() * 999) + 100);
//     document.getElementById("randomNum").innerHTML = v;
// };

//create a random number for the computer decision
//pull our numbers from text
// validate agaist what number the computer is thinking of
//give us a response according to wich digts we have corrent

// var compChoice1 = Math.floor(Math.random() * 10);
// var compChoice2 = Math.floor(Math.random() * 10);
// var compChoice3 = Math.floor(Math.random() * 10);
// var computerNum = [compChoice1, compChoice2, compChoice3];
// alert(computerNum);
var compChoice1, compChoice2, compChoice3;

function getRandomNum() {
	return Math.floor(Math.random() *10)
}
function startGame() {
	//here the computer will choose 3 unique numbers creating Arrray
	do{
		var computerNum = [compChoice1, compChoice2, compChoice3];
		compChoice1 = getRandomNum();
		compChoice2 = getRandomNum();
		compChoice3 = getRandomNum();
	}while (compChoice1 === compChoice2 || compChoice1 === compChoice3 || compChoice2=== compChoice3);
};

startGame();{
 var computerNum = [compChoice1, compChoice2, compChoice3];
 alert("The computer has choosen, enter your guess"  +  computerNum );



<!--Here will get the users input values-->

document.getElementById('addForm').addEventListener('submit', function(e) {
	 e.preventDefault();
	 var number1 = document.getElementById('guessNum1').value;
	 var number2 = document.getElementById('guessNum2').value;
	 var number3 = document.getElementById('guessNum3').value;
	 var computerNum = [compChoice1, compChoice2, compChoice3];
	 var userGuess =[number1, number2, number3]
	 alert('Your number Guess is  '+ userGuess + "And the computer guess"  + computerNum  );
	  if (userGuess === computerNum){
	 alert("you win" );}
});
}
<!-- Here will insert the guesses-->
// comparte varibales and use consolelog
// if (computerNum === userGuess){
//alert("you won");}


 		 //
 		 // 			function getUserGuess(){
 		 // 				var playerNum = [guessDigit1, guessDigit2, guessDigit3];
 		 //
 		 // // create a function to get user numbers
 		 // 		 	 guessDigit1 = document.getElementById("guessNum1").value;
 		 // 		 	 guessDigit2 = document.getElementById("guessNum2").value;
 		 // 		 	 guessDigit3 = document.getElementById("guessNum3").value;
 		 // 		 alert(playerNum)};
 		 // document.getElementById("playerGuess").innerHTML = playerNum;



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
