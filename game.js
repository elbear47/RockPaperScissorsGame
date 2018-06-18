


	var playerScore = 0;
	var computerScore = 0;    // initializes score to zero for both cpu and person
	var playerChoice;
	var readable = {   /*Creates an object readable which
	                       will convert numbers to readable results for user*/
		'0': 'Rock',		//remember to use commas to seperate
		'1': 'Paper',
		'2': 'Scissors'
	}

	var computerChoice = {
		init: function(){
			this.store = Math.floor(Math.random()*3);  //generate random number 0-2
			this.text = readable[this.store];
		},
		store:''
		,
		text: ''
		,
	};
	var order = [0,1,2,0];  //creating this array to show each number infront beats the one before

	var chooseWinner = function(player,cpu){
		if (order[player]=== order[cpu]) {  //ex. if user picks 1(paper) and cpu picks 1 its a draw
			return '  Its a draw';
		}
		if (order[player]< order[cpu]) {
			return '  You lost Try Again';
			computerScore++;
		}
		else{
			return '  You win!';
			playerScore++;
		}
	}
/*
UI CODE
*/
 var ptag = document.querySelector('p');  //looks for p tag in our html file

 var assignClick = function(element,pos){
 	element.addEventListener('click', function(){
 	playerChoice = pos;
 	computerChoice.init();
 	ptag.innerText = '\n'+'The computer chose: '+ computerChoice.text +'\n';
 	ptag.innerText +=  chooseWinner(playerChoice,computerChoice.store);
 	ptag.innerText += '\n'+'Wins: '+ playerScore;
 	ptag.innerText += '\n'+'Losses: '+ computerScore;
 	});
  }
 var images = {
 	classes: document.getElementsByClassName('button'),
 	init: function(){

 		for (var step = 0; step < this.classes.length; step++) {
 			assignClick(this.classes[step],step);
 		}
 	}
 }
images.init();