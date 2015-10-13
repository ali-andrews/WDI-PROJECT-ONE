//Pseudo code: Who wants to be a millionaire

//Create a background... with button 'start game'

//When users pushes start game.. the button fades and then leads to 'who wants to be a million screen'

//Player One automatically starts

//Then we have one question and four buttons (with different answer options)

//Ask the user to submit an answer..out of the four options only one will be correct  

//Calculate whether the answer is correct or not

//Regardless of whether the answer is wrong or right..it will go through to 'User 2's question'

//If either user gets a correct answer the score board will go up a point 

//It will then alternate between user one and user two until all the questions are finishes

//When the game finishes the scores will be tellied and one of the players will win or tie! 

window.onload = function (){
  Game.start();
}

var Game = {
  questions: window.questions,
  currentQuestionIndex: 0,
  playerOneScore: 0,
  playerTwoScore: 0,
  currentTheme: null,
  turn: 1,
  whichTurn: 1,
  turnText: document.getElementsByTagName("h4")[0],
}

Game.pickTheme = function(){
  var buttons = document.getElementsByClassName("buttons-theme");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
      $(".first-section").hide();
      $(".second-section").show();
      $('audio')[0].pause();
      Game.currentTheme = event.target.getAttribute("data-theme");
    Game.displayCurrentQuestion(); //calling the 'displaycurrentquestion'
    Game.displayCurrentAnswers();
    Game.clickedTheme();
  })
  }
}

Game.clickedTheme = function(){
  console.log($('SecondSong'))
  $('.secondSong').play();
  var chosenTheme = Game.questions[Game.currentTheme][Game.currentQuestionIndex];
}
 if (Game.pickTheme == 'general'){ 
}


Game.displayCurrentQuestion = function() {
 this.turn++ 
  if (this.turn % 2) { 
    this.whichTurn = 2;
    Game.turnText.innerText = "It is Player Twos turn";
  } else {
    this.whichTurn = 1;
    Game.turnText.innerText = "It is Player Ones turn";
  }

  var currentQuestion = Game.questions[Game.currentTheme][Game.currentQuestionIndex]
  document.getElementById("question").innerText = currentQuestion.text;
}

Game.displayCurrentAnswers = function() {
  var currentQuestion = Game.questions[Game.currentTheme][Game.currentQuestionIndex]; 
  var answers = currentQuestion.answers;
  var buttons = document.getElementsByClassName("answerButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answers[i];
  }
}
  Game.isAnswerCorrect = function(answer) {
    var currentQuestion = Game.questions[Game.currentTheme][Game.currentQuestionIndex];
    if (currentQuestion.correctAnswer == answer) {
      return true;
    } else {
      return false;
    }
  }

  Game.incrementScore = function() {
  if (this.turn % 2) { 
    Game.playerTwoScore++;
    document.getElementById('playerTwoScore').innerText = Game.playerTwoScore;
  } else {
    Game.playerOneScore++;
    document.getElementById('playerOneScore').innerText = Game.playerOneScore;
  }
}

Game.getMove = function() { 
  var buttonId = event.target.getAttribute("id");
  if (Game.isAnswerCorrect(buttonId)) {
    
    Game.incrementScore();
    Game.currentQuestionIndex++;
    if (Game.currentQuestionIndex < Game.questions[Game.currentTheme].length) { 
      Game.displayCurrentQuestion();
      Game.displayCurrentAnswers();
    } else {
      Game.checkWin();
    }
  } else {
       Game.currentQuestionIndex++;
       if (Game.currentQuestionIndex < Game.questions[Game.currentTheme].length) {
         Game.displayCurrentQuestion(); 
         Game.displayCurrentAnswers();
       } else {
        Game.checkWin();
      }
    }
  }

  Game.checkWin = function() {
  if (this.playerOneScore == this.playerTwoScore) { 
    Game.turnText.innerText = "Game over you both have tied - Goodluck splitting the money! " + "Please push restart to try a new topic";
  } else if (this.playerOneScore > this.playerTwoScore) { 
    Game.turnText.innerText = "Game over, Player One you are a millionaire! " + "Please push restart to try a new topic"; 
  }
  else { (this.playerTwoScore < this.playerOneScore)
    Game.turnText.innerText = "Game over, Player Two you are a millionaire! " + "Please push restart to try a new topic";
  }
}


Game.start = function () {
  var buttons = document.getElementsByClassName("answerButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", Game.getMove);
  }
  this.turnText = document.getElementsByTagName("h4")[0];
  this.pickTheme();
}






