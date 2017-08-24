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