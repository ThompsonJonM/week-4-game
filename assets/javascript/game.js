$(document).ready(function() {

	//Random number which will be shown in startScore text area
	//Generates a number between 9 and 150
	var RNG = Math.floor(Math.random()*141+9)

	//Inserts the number from RNG into startScore area
	$('#startScore').text(RNG);

	//Gem values
	//gemOne is Red, gemTwo is Blue, gemThree is Yellow, gemFour is Green
	//Each gem creates a random number between depending on the gem
	var gemOne = Math.floor(Math.random()*8+1)
	var gemTwo = Math.floor(Math.random()*8+1)
	var gemThree = Math.floor(Math.random()*8+1)
	var gemFour = Math.floor(Math.random()*8+1)

	//Game counts
	var playerScore = 0;
	var wins = 0;
	var losses = 0;

//Prints win and loss counts to their respective text areas
$('#winCount').text(wins);
$('#loseCount').text(losses);

//Game reset
function reset() {
	RNG = Math.floor(Math.random()*141+9);
		console.log(RNG)
		$('#startScore').text(RNG)
		gemOne = Math.floor(Math.random()*8+1);
		gemTwo = Math.floor(Math.random()*8+1);
		gemThree = Math.floor(Math.random()*8+1);
		gemFour = Math.floor(Math.random()*8+1);
		playerScore = 0;
		$('#finalPlayerScore').text(playerScore);
}

//Win alert
function winText() {
	alert("You're a crystal master!");
		wins++;
		$('#winCount').text(wins);
		reset();
}

//Lose alert
function loseText() {
	alert("Try Again!");
		losses++;
		$('#lossCount').text(losses);
		reset();
}

//On-Click functionality for Red
	$('#gemRed').on ('click', function() {
		playerScore = playerScore + gemOne;
		console.log("New playerScore= " + playerScore);

		$('#finalPlayerScore').text(playerScore);

			if (playerScore == RNG) {
				winText();
			} else if (playerScore > RNG) {
				loseText();
			}
	})

//On-Click functionality for Blue
	$('#gemBlue').on ('click', function() {
		playerScore = playerScore + gemTwo;
		console.log("New playerScore= " + playerScore);

		$('#finalPlayerScore').text(playerScore);

			if (playerScore == RNG) {
				winText();
			} 

			else if (playerScore > RNG) {
				loseText();
			}
	})

//On-Click functionality for Yellow
	$('#gemYellow').on ('click', function() {
		playerScore = playerScore + gemThree;
		console.log("New playerScore= " + playerScore);

		$('#finalPlayerScore').text(playerScore);

			if (playerScore == RNG) {
				winText();
			} else if (playerScore > RNG) {
				loseText();
			}
	})

//On-Click functionality for Green
	$('#gemGreen').on ('click', function() {
		playerScore = playerScore + gemFour;
		console.log("New playerScore= " + playerScore);

		$('#finalPlayerScore').text(playerScore);

			if (playerScore == RNG) {
				winText();
			} else if (playerScore > RNG) {
				loseText();
			}
	});

});