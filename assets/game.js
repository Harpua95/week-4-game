//$(document).ready(function(){

	// set functions

	var computerChoice = Math.floor(Math.random() * (120 - 19 + 1) +19);
	var winCount = 0;
	var loseCount = 0;
	var treyChoice = Math.floor(Math.random() * (12- 1 + 1)+ 1);
	var gordoChoice = Math.floor(Math.random() * (12- 1 + 1)+ 1);
	var pageChoice = Math.floor(Math.random() * (12- 1 + 1)+ 1);
	var fishChoice = Math.floor(Math.random() * (12- 1 + 1)+ 1);	
	var userTotalScore = 0;

//create functions-
//set values
//set game
//reset game
	function changePhishValues () {
		treyChoice = Math.floor(Math.random() * (12 -1 + 1) + 1);
		gordoChoice = Math.floor(Math.random() * (12 -1 + 1) + 1);
		pageChoice = Math.floor(Math.random() * (12 -1 + 1) + 1);
		fishChoice = Math.floor(Math.random() * (12 -1 + 1) + 1);

	}

	function playGame () {

		if (userTotalScore === computerChoice) {
			winCount++;
			$("#win-counter").text(winCount);
			$("#win-or-lose").text("Winner!!");
			computerChoice = Math.floor(Math.random()*(120 - 19 +1) + 19);
			$("#random-number").text(computerChoice);
			userTotalScore = 0;
			$("#current-score-counter").text(userTotalScore);
			changePhishValues();
		}

		else if(userTotalScore > computerChoice) {
			loseCount++;
			$("#loss-counter").html(loseCount);
			$("#win-or-lose").text("You Lost!!");
			computerChoice = Math.floor(Math.random() * (120 - 19 + 1) + 1);
			$("#random-number").text(computerChoice);
			userTotalScore = 0;
			$("#current-score-counter").text(userTotalScore);
			changePhishValues;
		}
	}

//call functions
//band members
//

	$("#random-number").text(computerChoice);

	$("#trey").on("click", function() {
		userTotalScore += treyChoice;
		$("#current-score-counter").text(userTotalScore);
			gamePlay();
	});
	
	$("#gordo").on("click", function() {
		userTotalScore += gordoChoice;
		$("#current-score-counter").text(userTotalScore);
			gamePlay();
			

	});

	$("#page").on("click", function() {
		userTotalScore += pageChoice;
		$("#current-score-counter").text(userTotalScore);
			gamePlay();
			

	});

	$("#fish").on("click", function() {
		userTotalScore += fishChoice;
		$("#current-score-counter").text(userTotalScore);
			gamePlay();
			

	});

	