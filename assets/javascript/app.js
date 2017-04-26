
// This is the Javascript file for the home work 4 trivia game
$(document).ready(function() {

	var questionsAndAnswers = [[
			[1, "What was the 14th state in the United States?"],
			[2, "Vermont"],
			[3, "Rohde Island"],
			[3, "Georgia"],
			[3, "Tennasee"],
			[4, "assets/images/vermont.jpg"]
		],
		[
			[1, "In the United States, where can alligators and crocodiles be found together in the wild?"],
			[2, "South Florida"],
			[3, "Texas"],
			[3, "Georgia"],
			[3, "Luisianna"],
			[4, "assets/images/baby_alligator.jpg"]
		],
		[
			[1, "Callisto is the name of a moon orbiting what planet in our solar system?"],
			[2, "Jupiter"],
			[3, "Neptune"],
			[3, "Mars"],
			[3, "Saturn"],
			[4, "assets/images/jupiter.jpg"]
		],
		[
			[1, "Who is not a Beatle?"],
			[2, "Steve"],
			[3, "John"],
			[3, "Paul"],
			[3, "George"],
			[4, "assets/images/beatlesstgpeppers.jpg"]
		],
		[
			[1, "Who was the first person to climb Mount Everest?"],
			[2, "Sir Edmund Hillary"],
			[3, "Sir Paul McCartney"],
			[3, "Charles Lindberg"],
			[3, "Gustauf Carvelli"],
			[4, "assets/images/hillary.jpg"]
		],
		[
			[1, "Where is the lowest point, on dry land, on the earth located?"],
			[2, "The Dead Sea"],
			[3, "Death Valley"],
			[3, "Olduvai Gorge"],
			[3, "Bentley Subglacial Trench"],
			[4, "assets/images/dead_sea.jpg"]
		],
		[
			[1, "Where was the earliest evidence of the existence of human ancestors found?"],
			[2, "Olduvai Gorge"],
			[3, "Mesopotamia"],
			[3, "Blombos Cave"],
			[3, "Omo River"],
			[4, "assets/images/olduvai_gorge.jpg"]
		],
		[
			[1, "What is the key to deciphering Egyptian hieroglyphs?"],
			[2, "The Rosetta Stone"],
			[3, "The Philosphers Stone"],
			[3, "The Dead Sea Scrolls"],
			[3, "The Book of Enoch"],
			[4, "assets/images/rosettastone.jpg"]
		]
	]

	var wins = 0;
	var losses = 0;
	var time = 0;
	var whichQuestion = 0;
	var round = 0;
	var timeTwo = 0;
	var nextRoundTime = 0;


	// Click to start game
	$("#questionBloc").append("<button class='button1 btn btn-default' value='1'>Start Game</button>");
	$(".button1").on("click", startRound);

	// function newGame(){
	// 	startRound();
	// }

	// This section starts each round of the game
	function startRound (){
		time = 10;
		writeQuestion();
		startTimer();
	};	

    function startTimer () {
   	    // Use setInterval to start the count, call function "count" every 1 second
        // var convertedTime = timeConverter(time);
        // write the start time to the screen
		$("#timerBloc").html("<div class='questionBloc'>You have " + time + " Seconds To Guess</div>");
        	intervalId = setInterval(count, 1000);
	    };

    // This function decrements timer, converts to time, writes to screen and checks for zero time
    function count () {
   	    time--;
       	// update the screen to the new converted time
		$("#timerBloc").html("<div class='timerBloc'>You have " + time + " Seconds To Guess</div>");
       	if (time < 0){
       		clearInterval(intervalId);
       		losses++;
       		$("#questionBloc").html("<div>Sorry time is up</div>");
			$("#questionBloc").append("<p></p>The correct answer was " + questionsAndAnswers[whichQuestion][1][1]);	
       		answers();
       	}
   	};

	// write a question and answers to the screen
	function writeQuestion(){
		// random number generator to pick question
		whichQuestion = [Math.floor(Math.random() * questionsAndAnswers.length)];
		// write the question
		$("#questionBloc").html("<div class='questionBloc'>" + questionsAndAnswers[whichQuestion][0][1] + "</div>");
		// this section will write the answers in random order
		// this loop shuffles a table used as a shuffled index into the question
		// so that the answers are not always in the same order
		var questOrderTable = [1,2,3,4];
		for (var d=0; d<=8; d++){
			var c = 0;
			var a = [Math.floor(Math.random() * 4)];
			var b = [Math.floor(Math.random() * 4)];
			if (a !== b){
				c = questOrderTable[a];
				questOrderTable[a] = questOrderTable[b];
				questOrderTable[b] = c;
			}
		}

		// This loop writes the 4 answers to the screen using the shuffled array
		for(var i=0; i<(questOrderTable.length); i++){	
			var e = questOrderTable[i];
			$("#questionBloc").append("<button class='answerplace btn btn-default' value=" + questionsAndAnswers[whichQuestion][e][0] + ">" + questionsAndAnswers[whichQuestion][e][1] + "</button><p></p>");
		}
	// end write question function
	}

	// this section gets the guess buttons, determins if correct, writes the screen 
	$("#questionBloc").on("click", "button", function(){
		clearInterval(intervalId);
		if(this.value === "2"){
			wins++;
			$("#questionBloc").html("Good Answer");	
			answers();
		}
		if(this.value === "3"){
			losses++;
			$("#questionBloc").html("Sorry, Wrong Answer");
			$("#questionBloc").append("<p></p>The correct answer was " + questionsAndAnswers[whichQuestion][1][1]);	
			answers();
		}
	});
			
	// this function updates the screen with score and starts a new round
	function answers(){
		console.log("we're in the answers function");
		// writes the picture
		$("#questionBloc").append("<p></p><p><img src=" + questionsAndAnswers[whichQuestion][5][1] + " alt='some char' style='height: 120px; width: 140px'>");
		$("#resultsBloc").html("Correct Answers: " + wins + " Wrong Answers: " + losses);
   		round++;
   		console.log("round - " + round);
   		if (round >= 5){
   			console.log("Game Over");
			$("#timerBloc").html("Game Over  ");
			$("#timerBloc").append("<button class='answerplace btn btn-default' value=8>Play Again</button><p></p>");
			$("#timerBloc").on("click", "button", function(){
				console.log("we got the restart game click");
				$("#resultsBloc").html("");
				wins = 0;
				losses = 0;
				whichQuestion = 0;
				round = 0;
				timeTwo = 0;
				nextRoundTime = 0;
				startRound();
			});
		}
		else{
			nextRoundTime = 3;
        	// var convertedTime2 = timeConverter(timeTwo);
			$("#timerBloc").html("Next round will start in " + nextRoundTime + " seconds");
    	   	intervalIdTwo = setInterval(countAgain, 1000);
		}
	// end answers function
	}

    // This function decrements timer, writes to screen, and checks for zero time
    function countAgain () {
   	    nextRoundTime --;
        console.log("we're in count again");
       	// update the screen to the new converted time
		$("#timerBloc").html("Next round will start in " + nextRoundTime + " seconds");
       	if (nextRoundTime === 0){
       		clearInterval(intervalIdTwo);
			startRound();
		// this section gets the guess buttons, determins if correct, writes the screen 
		}
	// end wait for next round function
	}


// close doc ready
});
