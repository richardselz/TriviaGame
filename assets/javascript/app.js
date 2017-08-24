$(document).ready(function(){
//Initiliazes all the code within once the page is "ready"
	var questionArr = [];
	var correctAnswers = 0;
	var wrongAnswers = 0;

	function triviaQuestion(questionID,question,answerA,answerB,answerC,answerD,correctAnswer){
		this.questionID = questionID;
		this.question = question;
		this.answerA = answerA;
		this.answerB = answerB;
		this.answerC = answerC;
		this.answerD = answerD;
		this.correctAnswer = correctAnswer;
		questionArr.push(questionID);
	}
	// var rawData = [
	// 	["question1","What does CSS mean?","Cascading Style Sheets","Cascading Sheet Styles","Clear Style Sheets","Clear Sheet Styles","A"],
	// 	["question2","When was Javascript created?", "1997", "1992", "1998", "1995", "D"]
	// ]
	var question1 = new triviaQuestion("question1","What does CSS mean?","Cascading Style Sheets","Cascading Sheet Styles","Clear Style Sheets","Clear Sheet Styles","A");
	var question2 = new triviaQuestion("question2","When was Javascript created?", "1997", "1992", "1998", "1995", "D");
	var question3 = new triviaQuestion("question3","What does DOM mean?","Document Observation Model","Document Object Model","Direct Observation Model","Document Observation Manager","B");
	var question4 = new triviaQuestion("question4","What does a class and ID start with?",". = ID & # = class", ". = class & > = ID", ". = class & # = ID", "# = class & ^ = ID", "C");

	console.log(questionArr);
	console.log(question1);
	console.log(questionArr[3]);

	var questionNumber = 1;

		$("#question").text(questionArr[0].question);
		$("#answerA").text(questionArr[0].question);
		$("#answerB").text(question1.answerB);
		$("#answerC").text(questionArr[0].answerC);
		$("#answerD").text(questionArr[0].answerD);

});