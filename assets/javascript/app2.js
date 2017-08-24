$(document).ready(function(){

	var questionArr = [["What does CSS mean?","Cascading Style Sheets","Cascading Sheet Styles","Clear Style Sheets","Clear Sheet Styles","Cascading Style Sheets"],
						["When was Javascript created?", "1997", "1992", "1998", "1995", "1995"],
						["What does DOM mean?","Document Observation Model","Document Object Model","Direct Observation Model","Document Observation Manager","Document Object Model"],
						["What does a class and ID start with?",". = ID & # = class", ". = class & > = ID", ". = class & # = ID", "# = class & ^ = ID", ". = class & # = ID"]];
	//Questions, Answer1, Answer2, Answer3, Answer4, CorrectAnswer

	//set i and j to = 0 so that it can always be reset
	$("#question").html(questionArr[0][0]);
	$("#answerA").text(questionArr[0][1]);
	$("#answerB").text(questionArr[0][2]);
	$("#answerC").text(questionArr[0][3]);
	$("#answerD").text(questionArr[0][4]);
	console.log(questionArr[0][2]);

var timeStarter;
var clockRunning = false;

var questionAnswer = {
	time: 25,
	timeUp: 0,
	i: 0,
	j : 0,
	rightAnswers: 0,
	wrongAnswers: 0,

	reset: function() {
		questionAnswer.time = 25;
		questionAnswer.timeUp = 0;
		questionAnswer.i = 0;
		questionAnswer.j = 0;
		questionAnswer.rightAnswers = 0;
		questionAnswer.wrongAnswers = 0;

	},

	startTime: function(x) {
		if(!clockRunning) {
			timeStarter = setInterval(questionAnswer.counter, x);
		}
	},

	counter: function() {
		questionAnswer.timeUp++;
		questionAnswer.newTime = questionAnswer.time - questionAnswer.timeUp;
		$("#timing").text(questionAnswer.newTime);
		console.log(questionAnswer.newTime);
		if(questionAnswer.newTime <= 0){
			//time is up go to answer
			$("#triviaQuestion").hide();
			$("#triviaAnswer").show();
			clearInterval(timeStarter);
		}
	}

}//closure for the var questionAnswer
	//start time on each question page load, if time is x go to answer
$("#triviaAnswer").hide();
questionAnswer.reset();
questionAnswer.startTime(1000);

});