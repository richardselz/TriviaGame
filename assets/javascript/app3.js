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
	},
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

function reset() {
	i = questionsAsked = answersRight = answersWrong = timeInterval = 0;
	answerTime = 5;
	timing = 1;
	$("#timing").text(answerTime);
	$("#theScores").hide();
	startTrivia();
}

function resetDuringTrivia() {
	answerTime = 5;
	timing = 1;
	$("#timing").text(answerTime);
}

function counter() {
	var newTime = answerTime - timing;
	$("#timing").text(newTime);
	timing++;
	// console.log("In the counter");
	// console.log(newTime);
	if(newTime <= 0){
		clearInterval(timeInterval);
		$("#triviaQuestion").hide();
		$("#triviaAnswer").show();
		startAnswerTime();
		answersWrong++;
		questionsAsked++;
	}else if(newTime > 0) {
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
				answersRight++;
			}else{
				answersWrong++;
			}
		});
		$("#answerB").on("click",function(){
			if(quiz[i].correct === "B"){
				answersRight++;
			}else{
				answersWrong++;
			}
		});
		$("#answerC").on("click",function(){
			if(quiz[i].correct === "C"){
				answersRight++;
			}else{
				answersWrong++;
			}
		});
		$("#answerD").on("click",function(){
			if(quiz[i].correct === "D"){
				answersRight++;
			}else{
				answersWrong++;
			}
		});
	}
	// }else if(questionsAsked === quiz.length-1){
	// 	clearInterval(timeInterval);
	// 	theEndIsNear();
	// }
}

//timer with timer parameter input
function startTime() {
	timeInterval = setInterval(counter,1000);
}

function startAnswerTime() {
	timeAnswerInterval = setInterval(endChecker, 3000);
}

function startTrivia() {
	
	clearInterval(timeAnswerInterval);
	$("#triviaQuestion").show();
	$("#triviaAnswer").hide();
	$("#question").html(quiz[i].question);
	$("#answerA").text(quiz[i].answer[0].answer);
	$("#answerB").text(quiz[i].answer[1].answer);
	$("#answerC").text(quiz[i].answer[2].answer);
	$("#answerD").text(quiz[i].answer[3].answer);
	i++;
	resetDuringTrivia();
	startTime();
}

function endChecker() {
	if(questionsAsked === quiz.length){
		clearInterval(timeInterval);
		clearInterval(timeAnswerInterval);
		theEndIsNear();
	}else{
		startTrivia();
	}
}

function theEndIsNear() {
	console.log("Within the END!");
	$("#triviaQuestion").hide();
	$("#triviaAnswer").hide();
	$("#theScores").show();
}

reset(); //use as the starter of the game.. this way it is always reset

});