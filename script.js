
$(document).ready(function(){
 
var magic8Ball = {};
    
 magic8Ball.listOfAnswers = ["Yes", "No", "Maybe"];

$("#answer").hide();
 
 magic8Ball.askQuestion = function (question)
{
	
	$("#answer").fadeIn(4000);
	$("#8ball").effect("shake");
	
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor (randomNumberForListOfAnswers);
	var answer = this.listOfAnswers [randomIndex];
 
    $("#answer").text(answer);
	 
	$("#8ball").attr ("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	console.log(question);
    console.log(answer);
    };
 
  
	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		
       setTimeout(
		   function()
		   {
		 		var question = prompt("ASK A YES/NO QUESTION!");
		   
        		magic8Ball.askQuestion(question);
		   },500);	
    };
 
    $("#questionButton").click(onClick);
 
});