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
    Game.displayCurrentQuestion(); 
    Game.displayCurrentAnswers();
    Game.clickedTheme();
  })
  }
}

Game.clickedTheme = function(){
  var chosenTheme = Game.questions[Game.currentTheme][Game.currentQuestionIndex];
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
  console.log(currentQuestion)
  if (currentQuestion.correctAnswer == answer) {
    var audioWin = new Audio("./sounds/winner.mp3")
    audioWin.play();
    return true;
  } else {
    var audioLose = new Audio("./sounds/wrong_answer.mp3")
    audioLose.play();
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
    Game.turnText.innerText = "Gameover you both have tied - Goodluck splitting the money! " + "Please push restart to try a new topic";
  } else if (this.playerOneScore > this.playerTwoScore) { 
    Game.turnText.innerText = "Gameover, Player One you are a millionaire! " + "Please push restart to try a new topic"; 
  }
  else { (this.playerTwoScore < this.playerOneScore)
    Game.turnText.innerText = "Gameover, Player Two you are a millionaire! " + "Please push restart to try a new topic";
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