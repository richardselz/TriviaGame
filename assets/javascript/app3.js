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
		correct: "A",
		answerDefinition: "The correct answer was A, because CSS stands for Cascading Style Sheets.<br/>For more information please use your GoogleFu. (or <a href=\"https://www.w3schools.com/css/css_intro.asp\" target=\"_blank\">click here</a>)"
	},
	{
		question: "When was Javascript created?",
		answer: [
			{answer: "1997", isCorrect: false},
			{answer: "1992", isCorrect: false},
			{answer: "1998", isCorrect: false},
			{answer: "1995", isCorrect: true},

		],
		correct: "D",
		answerDefinition: "JavaScript was in fact created in 1995."
	},
	{
		question: "What does DOM mean?",
		answer: [
			{answer: "Document Observation Model", isCorrect: false},
			{answer: "Document Object Model", isCorrect: true},
			{answer: "Direct Observation Model", isCorrect: false},
			{answer: "Document Observation Manager", isCorrect: false},

		],
		correct: "B",
		answerDefinition: "DOM stands for Document Object Model."
	},
	{
		question: "What does a class and ID start with?",
		answer: [
			{answer: ". = ID & # = class", isCorrect: false},
			{answer: ". = class & > = ID", isCorrect: false},
			{answer: ". = class & # = ID", isCorrect: true},
			{answer: "# = class & ^ = ID", isCorrect: false},

		],
		correct: "C",
		answerDefinition: "A Class is denoted by \".\" and an ID is denoted by \"#\""
	}
	//This is intentionally left here for ease of replication for questions
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

//variables for time, questions, etc..
var i = newTime = answersNotAnswered = questionsAsked = answersRight = answersWrong = timeInterval = timeAnswerInterval = answerTime = timing = 0;
var firstThrough = true;

//reset has all values and then startTrivia to run the entire game
function reset() {
	i = newTime = answersNotAnswered = questionsAsked = answersRight = answersWrong = timeInterval = 0;
	answerTime = 25;
	timing = 1;
	$("#timing").text(answerTime);
	$("#theScores").hide();
	startTrivia();
}

//theTimer is the one source for all timing functions, so that it has easy of start and stop
function theTimer(x) {
	timeInterval = setInterval(function(){
		if(x > 1000){ //calls counter
			endChecker();
		}else{
			counter();
			answerCheck();
		}
	},x);	
}

//depending on the time
function stopTimer(){
	clearInterval(timeInterval);
}
//Resets all the variables needed to do a reliable countdown for each Question
function resetDuringTrivia() {
	answerTime = 25;
	timing = 1;
	$("#wrongAnswer").hide();
	$("#rightAnswer").hide();
	$("#timeAnswer").hide();
	$("#timing").text(answerTime)
}

function answerCheck() {
	if(newTime <= 0){
		stopTimer();
		clearInterval(timeInterval);
		$("#triviaQuestion").hide();
		$("#triviaAnswer").show();
		$("#timeAnswer").show();
		$("#theAnswer").html(quiz[i].answerDefinition);
		theTimer(3000);
		answersNotAnswered++;
		questionsAsked++;
	}else if(newTime > 0) {
		var answerValue = $(this).attr("value");
		if(answerValue === quiz[i].correct){
			stopTimer();
			answersRight++;
			questionsAsked++;
			$("#triviaQuestion").hide();
			$("#triviaAnswer").show();
			$("#rightAnswer").show();
			$("#theAnswer").html(quiz[i].answerDefinition);
			theTimer(3000);
		}else if(answerValue !== quiz[i].correct && answerValue) {
			stopTimer();
			answersWrong++;
			questionsAsked++;
			$("#triviaQuestion").hide();
			$("#triviaAnswer").show();
			$("#wrongAnswer").show();
			$("#theAnswer").html(quiz[i].answerDefinition);
			theTimer(3000);
		}
	}
}

function counter() {
	newTime = answerTime - timing;
	$("#timing").text(newTime);
	timing++;
}

function startTrivia() {
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

function endChecker() {
	if(questionsAsked >= quiz.length){
		stopTimer();
		theEndIsNear();
	}else{
		i++;
		startTrivia();
	}
}

function theEndIsNear() {

	clearInterval(timeAnswerInterval);
	clearInterval(timeInterval);
	$("#triviaQuestion").hide();
	$("#triviaAnswer").hide();
	$("#theScores").show();
	$("#answersRight").text(answersRight);
	$("#answersWrong").text(answersWrong);
	$("#notAnswered").text(answersNotAnswered);
	$("#questionsAsked").text(questionsAsked);
}

reset(); //use as the starter of the game.. this way it is always reset
$(document).on("click", ".answer", answerCheck);
$(document).on("click", "#resetGame", reset);
});