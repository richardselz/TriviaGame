//Things to go back and change
/* 
	Make one timer, but call it with the different time alotments.. 
	set an if statement within to turn on timer for certain calls, etc..
	within if set true and set other to false and vis versa
	if(!timerOne){
	
	timeOne = true;
	}else{
	
	timerOne = false;
	}
*/

$(document).ready(function(){
var quiz = [
	{
		question: "What does CSS mean?",
		answer: [
			{answer: "Cascading Style Sheets", isCorrect: true},
			{answer: "Cascading Sheet Styles", isCorrect: false},
			{answer: "Clear Style Sheets", isCorrect: false},
			{answer: "Clear Sheet Styles", isCorrect: false},

		],
		correct: "A"
	},
	{
		question: "When was Javascript created?",
		answer: [
			{answer: "1997", isCorrect: false},
			{answer: "1992", isCorrect: false},
			{answer: "1998", isCorrect: false},
			{answer: "1995", isCorrect: true},

		],
		correct: "D"
	},
	{
		question: "What does DOM mean?",
		answer: [
			{answer: "Document Observation Model", isCorrect: false},
			{answer: "Document Object Model", isCorrect: true},
			{answer: "Direct Observation Model", isCorrect: false},
			{answer: "Document Observation Manager", isCorrect: false},

		],
		correct: "B"
	},
	{
		question: "What does a class and ID start with?",
		answer: [
			{answer: ". = ID & # = class", isCorrect: false},
			{answer: ". = class & > = ID", isCorrect: false},
			{answer: ". = class & # = ID", isCorrect: true},
			{answer: "# = class & ^ = ID", isCorrect: false},

		],
		correct: "C"
	}
	// {
	// 	question: "When was Javascript created?",
	// 	answer: [
	// 		{answer: "1997", isCorrect: false},
	// 		{answer: "1992", isCorrect: false},
	// 		{answer: "1998", isCorrect: false},
	// 		{answer: "1995", isCorrect: false},

	// 	]
	// }
];

//console.log(quiz[2].answer[1].isCorrect); this goes to the 3rd Question and gets whether the second answer is true or false

//variables for time, questions, etc..
var i = questionsAsked = answersRight = answersWrong = timeInterval = timeAnswerInterval = answerTime = timing = 0;
var firstThrough = true;

//reset has all values and then startTrivia to run the entire game
function reset() {
	i = questionsAsked = answersRight = answersWrong = timeInterval = 0;
	answerTime = 5;
	timing = 1;
	$("#timing").text(answerTime);
	$("#theScores").hide();
	startTrivia();
	firstThrough = true;
}
//timer with timer parameter input
// function startTime() {
// 	timeInterval = setInterval(counter,1000);
// }

// function startAnswerTime() {
// 	timeAnswerInterval = setInterval(endChecker, 3000);
// }
//theTimer is the one source for all timing functions, so that it has easy of start and stop
function theTimer(x) {
	timeInterval = setInterval(function(){
		if(x > 1000){ //calls counter
			endChecker();
		}else{
			counter();
		}
	},x);	
}

//depending on the time
function stopTimer(){
	clearInterval(timeInterval);
}
//Resets all the variables needed to do a reliable countdown for each Question
function resetDuringTrivia() {
	answerTime = 5;
	timing = 1;
	$("#timing").text(answerTime)
	firstThrough = true;
}

function counter() {
	var newTime = answerTime - timing;
	$("#timing").text(newTime);
	timing++;
	// console.log("In the counter");
	// console.log(newTime);
	if(newTime <= 0){
		console.log("Inside time up?!?");
		clearInterval(timeInterval);
		$("#triviaQuestion").hide();
		$("#triviaAnswer").show();
		theTimer(3000);
		answersWrong++;
		questionsAsked++;
	}else if(newTime > 0 && firstThrough) {
		// $(".answer").on("click",function(){
		// 	console.log(this.value);
		// 	if(this.value === quiz[i].answer)
		// 	{
		// 		console.log("clicked Right");
		// 		answersRight++;
		// 	}else{
		// 		console.log("clicked Wrong");
		// 		answersWrong++;
		// 	}
		// });
		$("#answerA").on("click",function(){
			if(quiz[i].correct === "A"){
				console.log("Clicked Letter A");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersRight++;
				questionsAsked++;
				$("#triviaQuestion").hide();
				$("#triviaAnswer").show();	
				stopTimer();			
				theTimer(3000);
			}else{
				console.log("Clicked Letter A");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersWrong++;
				questionsAsked++;
				$("#triviaQuestion").hide();
				$("#triviaAnswer").show();
				stopTimer();			
				theTimer(3000);
			}
		});
		$("#answerB").on("click",function(){
			if(quiz[i].correct === "B"){
				console.log("Clicked Letter B");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersRight++;
				questionsAsked++;
				$("#triviaQuestion").hide();
				$("#triviaAnswer").show();
				stopTimer();			
				theTimer(3000);
			}else{
				console.log("Clicked Letter B");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersWrong++;
				questionsAsked++;
				$("#triviaQuestion").hide();
				$("#triviaAnswer").show();
				stopTimer();			
				theTimer(3000);
			}
		});
		$("#answerC").on("click",function(){
			if(quiz[i].correct === "C"){
				console.log("Clicked Letter C");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersRight++;
				questionsAsked++;
				stopTimer();			
				theTimer(3000);
			}else{
				console.log("Clicked Letter C");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersWrong++;
				questionsAsked++;
				stopTimer();			
				theTimer(3000);
			}
		});
		$("#answerD").on("click",function(){
			if(quiz[i].correct === "D"){
				console.log("Clicked Letter D");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersRight++;
				questionsAsked++;
				stopTimer();			
				theTimer(3000);
			}else{
				console.log("Clicked Letter D");
				console.log("Quiz Value of Correct: " + quiz[i].correct);
				answersWrong++;
				questionsAsked++;
				stopTimer();			
				theTimer(3000);
			}
		});
	}
	firstThrough = false;
	// }else if(questionsAsked === quiz.length-1){
	// 	clearInterval(timeInterval);
	// 	theEndIsNear();
	// }
}



function startTrivia() {
	console.log("The value of I is: " + i);
	stopTimer();
	$("#triviaQuestion").show();
	$("#triviaAnswer").hide();
	$("#question").html(quiz[i].question);
	$("#answerA").text(quiz[i].answer[0].answer);
	$("#answerB").text(quiz[i].answer[1].answer);
	$("#answerC").text(quiz[i].answer[2].answer);
	$("#answerD").text(quiz[i].answer[3].answer);
	resetDuringTrivia();
	theTimer(1000);
}

// function stopTime() {
// 	clearInterval(timeInterval);
// }

// function stopAnswerTime() {
// 	clearInterval(timeAnswerInterval);
// }

function endChecker() {
	if(questionsAsked >= quiz.length+1){
		stopTimer();
		theEndIsNear();
	}else{
		console.log("After 4 why am I still going?");
		i++;
		startTrivia();
	}
}

function theEndIsNear() {
	console.log("Within the END!");
	console.log(i);
	clearInterval(timeAnswerInterval);
	clearInterval(timeInterval);
	$("#triviaQuestion").hide();
	$("#triviaAnswer").hide();
	$("#theScores").show();
	$("#answersRight").text(answersRight);
	$("#answersWrong").text(answersWrong);
	$("#questionsAsked").text(questionsAsked);
}

reset(); //use as the starter of the game.. this way it is always reset

});