$(document).ready(function() {

	//Random number which will be shown in startScore text area
	//Generates a number between 19 and 120
	var rng = Math.floor(Math.random()*101+19)

	//Inserts the number from RNG into startScore area
	$('#startScore').text(rng);

	//Gem values
	//gemOne is Red, gemTwo is Blue, gemThree is Yellow, gemFour is Green
	//Each gem creates a random number between 1-12 
	//This number is then used to increase finalPlayerScore to reach startScore
	var gemOne = Math.floor(Math.random()*11+1)
	var gemTwo = Math.floor(Math.random()*11+1)
	var gemThree = Math.floor(Math.random()*11+1)
	var gemFour = Math.floor(Math.random()*11+1)

	//Game counts
	var score = 0;
	var wins = 0;
	var losses = 0;

	//Prints win and loss counts to their respective text areas
	$('#winCount').text(wins);
	$('#loseCount').text(losses);

	//Game reset
	function reset() {
		rng = Math.floor(Math.random()*101+19);
			console.log(rng)
			$('#startScore').text(rng)
			gemOne = Math.floor(Math.random()*11+1);
			gemTwo = Math.floor(Math.random()*11+1);
			gemThree = Math.floor(Math.random()*11+1);
			gemFour = Math.floor(Math.random()*11+1);
			score = 0;
			$('#finalPlayerScore').text(score);
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
		score = score + gemOne;
		$('#finalPlayerScore').text(score);

			if (score == rng) {
				winText();
			} else if (score > rng) {
				loseText();
			}
	})

	//On-Click functionality for Blue
	$('#gemBlue').on ('click', function() {
		score = score + gemTwo;
		$('#finalPlayerScore').text(score);

			if (score == rng) {
				winText();
			} 

			else if (score > rng) {
				loseText();
			}
	})

	//On-Click functionality for Yellow
	$('#gemYellow').on ('click', function() {
		score = score + gemThree;
		$('#finalPlayerScore').text(score);

			if (score == rng) {
				winText();
			} else if (score > rng) {
				loseText();
			}
	})

	//On-Click functionality for Green
	$('#gemGreen').on ('click', function() {
		score = score + gemFour;
		$('#finalPlayerScore').text(score);

			if (score == rng) {
				winText();
			} else if (score > rng) {
				loseText();
			}
	});

});