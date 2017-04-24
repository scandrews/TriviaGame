
// This is the Java Script file for the home work 4 trivia game
$(document).ready(function() {

	var questionsAndAnswers = [[
			[1, "What was the 14th state in the United States?"],
			[2, "Vermont"],
			[3, "Rohde Island"],
			[3, "Georgia"],
			[3, "Tennasee"]
		],
		[
			[1, "In the United States, where can alligators and crocodiles be found together in the wild?"],
			[2, "South Florida"],
			[3, "Texas"],
			[3, "Georgia"],
			[3, "Luisianna"]
		],
		[
			[1, "Callisto is the name of a moon orbiting what planet in our solar system?"],
			[2, "Jupiter"],
			[3, "Neptune"],
			[3, "Mars"],
			[3, "Saturn"]
		],
		[
			[1, "Who is not a Beatle?"],
			[2, "Steve"],
			[3, "John"],
			[3, "Paul"],
			[3, "George"]
		],
		[
			[1, "Who was the first person to climb Mount Everest?"],
			[2, "Sir Edmund Hillary"],
			[3, "Sir Paul McCartney"],
			[3, "Charles Lindberg"],
			[3, "Gustauf Carvelli"]
		],
		[
			[1, "Where is the lowest point, on dry land, on the earth located?"],
			[2, "The Dead Sea"],
			[3, "Death Valley"],
			[3, "Olduvai Gorge"],
			[3, "Bentley Subglacial Trench"],
		],
		[
			[1, "Where was the earliest evidence of the existence of human ancestors found?"],
			[2, "Olduvai Gorge"],
			[3, "Mesopotamia"],
			[3, "Blombos Cave"],
			[3, "Omo River"]
		],
		[
			[1, "What is the key to deciphering Egyptian hieroglyphs?"],
			[2, "The Rosetta Stone"],
			[3, "The Philosphers Stone"],
			[3, "The Dead Sea Scrolls"],
			[3, "The Book of Enoch"],
		]
		]


	// var questionsAndAnswers = [
		// question1 = {
	// 		question: "What was the 14th state in the United States?",
	// 		correctAnswer: "Vermont",
	// 		wrongAnswer1: "Rohde Island",
	// 		wrongAnswer2: "Georgia",
	// 		wrongAnswer3: "Tennasee"
	// 	},
	// 	question2 = {
	// 		question: "In the United States, where can alligators and crocodiles be found together in the wild?",
	// 		correctAnswer: "South Florida",
	// 		wrongAnswer1: "Texas",
	// 		wrongAnswer2: "Georgia",
	// 		wrongAnswer3: "Luisianna",
	// 	},
	// 	question3 = {
	// 		question: "Callisto is the name of a moon orbiting what planet in our solar system?",
	// 		correctAnswer: "Jupiter",
	// 		wrongAnswer1: "Neptune",
	// 		wrongAnswer2: "Mars",
	// 		wrongAnswer3: "Saturn",
	// 	},
	// 	question4 = {
	// 		question: "Who is not a Beatle?",
	// 		correctAnswer: "Steve",
	// 		wrongAnswer1: "John",
	// 		wrongAnswer2: "Paul",
	// 		wrongAnswer3: "George",
	// 	},
	// 	question5 = {
	// 		question: "Who was the first person to climb Mount Everest?",
	// 		correctAnswer: "Sir Edmund Hillary",
	// 		wrongAnswer1: "Sir Paul McCartney",
	// 		wrongAnswer2: "Charles Lindberg",
	// 		wrongAnswer3: "Gustauf Carvelli",
	// 	},
	// 	question6 = {
	// 		question: "Where is the lowest point, on dry land, on the earth located?",
	// 		correctAnswer: "The Dead Sea",
	// 		wrongAnswer1: "Death Valley",
	// 		wrongAnswer2: "Olduvai Gorge",
	// 		wrongAnswer3: "Bentley Subglacial Trench",
	// 	},
	// 	question7 = {
	// 		question: "Where was the earliest evidence of the existence of human ancestors found?",
	// 		correctAnswer: "Olduvai Gorge",
	// 		wrongAnswer1: "Mesopotamia",
	// 		wrongAnswer2: "Blombos Cave",
	// 		wrongAnswer3: "Omo River",
	// 	},
	// 	question8 = {
	// 		question: "What is the key to deciphering Egyptian hieroglyphs?",
	// 		correctAnswer: "The Rosetta Stone",
	// 		wrongAnswer1: "The Philosphers Stone",
	// 		wrongAnswer2: "The Dead Sea Scrolls",
	// 		wrongAnswer3: "The Book of Enoch",
	// 	}
	// ]



	var playGame = true;
	var wins = 0;
	var losses = 0;
	var time = 0;
	var winlose = 0;


	// Click to start game
	$("#questionBloc").append("<button class='button1 btn btn-default' value='1'>Start Game</button>");
	$(".button1").on("click", startRound);

		function startRound (){
			time = 10;
			writeQuestion();
			startTimer();
		};	

	    function startTimer () {
    	    // Use setInterval to start the count, call function "count" every 1 second
	        var convertedTime = timeConverter(time);
			$("#timerBloc").html("<div class='questionBloc'>You have " + convertedTime + " Seconds Left</div>");
        	intervalId = setInterval(count, 1000);
        	console.log("in start timer after set interval, intervalId - " + intervalId);
	    };

	    // This function decrements timer, converts to time, writes to screen and checks for zero time
	    function count () {
    	    time--;
	        convertedTime = timeConverter(time);
    	    console.log(convertedTime);
        	// update the screen to the new converted time
			$("#timerBloc").html("<div class='questionBloc'>You have " + convertedTime + " Seconds Left</div>");
        	if (time === 0){
        		clearInterval(intervalId);
        		losses++;
        		$("#questionBloc").html("<div>Sorry time ran out, You've lost " + losses + " times</div>");
        		answers();
        	}
    	};

		// write a question and answers to the screen
		function writeQuestion(){
			// random number generator to pick question
			var whichQuestion = [Math.floor(Math.random() * questionsAndAnswers.length)];
			// write the question
			$("#questionBloc").html("<div class='questionBloc'>" + questionsAndAnswers[whichQuestion][0][1] + "</div>");
			// this section will write the answers in random order
			// this loop shuffles a table used as a shuffled index into the question
			// so that the answers are not always in the same order
			var questOrderTable = [1,2,3,4];
			console.log(questOrderTable);
			for (var d=0; d<=8; d++){
				var a = [Math.floor(Math.random() * 4)];
				var b = [Math.floor(Math.random() * 4)];
				if (a !== b){
					c = questOrderTable[a];
					questOrderTable[a] = questOrderTable[b];
					questOrderTable[b] = c;
				}
			}
			console.log(questOrderTable);

			for(var i=0; i<(questOrderTable.length); i++){	
				var e = questOrderTable[i];
				$("#questionBloc").append("<button class='answerplace' value=" + questionsAndAnswers[whichQuestion][e][0] + ">" + questionsAndAnswers[whichQuestion][e][1] + "</button><p></p>");
			}
		}

		// 	$("#questionBloc").html("
		// <div class='questionBloc'>" + questionsAndAnswers[questionIndex].question + "</div>
		// <button class='answerplace' value=1>" + questionsAndAnswers[questionIndex].correctAnswer + "</button>
		// <button class='answerplace' value=2>" + questionsAndAnswers[questionIndex].wrongAnswer1 + "</button>
		// <button class='answerplace' value=2>" + questionsAndAnswers[questionIndex].wrongAnswer2 + "</button>
		// <button class='answerplace' value=2>" + questionsAndAnswers[questionIndex].wrongAnswer3 + "</button>");
		// };

		$("#questionBloc").on("click", "button", function(){
			clearInterval(intervalId);
			winlose = this.value;
			console.log("answer was " + winlose);
			if(winlose === "2"){
				wins++;
				$("#questionBloc").html("Good Answer");	
				answers();
			}
			if(winlose === "3"){
				losses++;
				$("#questionBloc").html("Sorry, Wrong Answer");	
				answers();
			}
		});
			
		function answers(){
			$("#resultsBloc").html("Wins: " + wins + " Losses: " + losses);
			$("#restartBloc").html("<button class='button2 btn btn-default' value='1'>play another round</button>");
			$(".button2").on("click", function(){
				$("#restartBloc").html("");
				startRound();
			});
		}

	    function timeConverter (t) {
    	    var minutes = Math.floor(t / 60);
        	var seconds = t - (minutes * 60);
	        if (seconds < 10) {
    	        seconds = "0" + seconds;
        	}
	        if (minutes === 0) {
    	        minutes = "00";
        	}
	        else if (minutes < 10) {
    	        minutes = "0" + minutes;
        	}
	        return minutes + ":" + seconds;
    	};

// close doc ready
});


		// console.log("got the first click");
  //       $("#mainPlayBloc").html("<button class='button2 btn btn-default' value='2'>won</button>");
		// $(".button2").on("click", function(){
  //       	if(this.value == 2){
  //       		outCome = won;
  //       	}


			// End game play
			// if (playGame == false){

	// 			if(outCome == won){

	// 				console.log("we won");
	// 				$(".secondBloc").text("Good Job, You Won");
		
	// 			}
	// 			else {
	// 				$("#mainPlayBloc").text("Sorry, you lost");
	// 			}
	// 			console.log("we fell through the won/loss loop");
	// 			$("#mainPlayBloc").append("<button class='button3 btn btn-default' value='3'>play again</button>");
	// 				$(".button3").on("click", function(){
	// 					console.log("got the button3 click");
	// 					playGame = true;
	// 				})
	// 			console.log("got the return");
	// 			// return;
	// 	// end button2 handling
	// 	});
	// 	console.log("maybe got the return here");
	// // end button one handling
	// });

// end start game if statement

	// var playGame = true;
	// var outCome = true;
	// var won = true;
	// var last = false;
	// var test = 1;
	// return;


		// $(".secondBloc").text("Would You Like To Play Again?");
		// $(".secondBloc").append("<button class='button btn btn-default' value='8'>Play Again?</button>");

		


	//  show a screen congratulating them for choosing the right option
	// . After a few seconds, 
	// display the next question - do this without user input.

	// * The scenario is similar for wrong answers and time-outs.


	//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

	//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


	// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
