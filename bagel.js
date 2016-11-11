
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
	//choose 3 unique numbers

	do{
		compChoice1 = getRandomNum();
		compChoice2 = getRandomNum();
		compChoice3 = getRandomNum();
	}while (compChoice1 === compChoice2 || compChoice1 === compChoice3 || compChoice2=== compChoice3);

}
startGame();
var computerNum = [compChoice1, compChoice2, compChoice3];
alert(computerNum);
