//Pseudo code: Who wants to be a millionaire

//Create a background... with button 'start game'

//When users pushes start game.. the button fades and then leads to a 'who wants to be a million screen'

//Player One automatically starts

//Then we have one question and four buttons (with different answer options)

//Ask the user to submit an answer..out of the four options only one will be the correct answer 

//Calculate the answer

//It doesn't matter if the answer is correct or not..it will go through to Player 2 Users option

//If they got it correct it will go up one point on the score board 

//It will then alternate between user one and user two until all the questions are finishes

//When the game finishes the scores will be tellied and one of the players will win or tie! 


window.onload = start;

function start() {
  var buttons = document.getElementsByClassName("answerButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", Game.getMove);
  }
  Game.start();
}

var Game = {
  questions: [],
  currentQuestionIndex: 0,
  playerOneScore: 0,
  playerTwoScore: 0,
  turn: 1,
  whichTurn: 1,
  turnText: document.getElementsByTagName("h4")[0],
}


var Question = {
  text: "",
  answers: [],
  correctAnswer: 0,
}

//game methods start here




Game.start = function () {
  Game.turnText = document.getElementsByTagName("h4")[0];
  this.loadQuestions();  //loads the questions array
  this.displayCurrentQuestion(); //calling the 'displaycurrentquestion'
  this.displayCurrentAnswers();
  
  // alert('Game started');
}

Game.loadQuestions = function() {
  this.questions = [
  {text: "Where was the first G.A. headquarters and when was it established?", answers:["New York, 2011", "New York, 2013", "New York, 2009", "San Francisco, 2011"], correctAnswer: 0 , questionId1: 0,},
  {text: "How many campus's does G.A. have?", answers:["10", "8", "14", "9"], correctAnswer: 2},
  {text: "What year was the google logo centered on its webpage?", answers:["2004", "2003", "2001", "1996"], correctAnswer: 2},
  {text: "How much money does eBay make per second?", answers:["$340", "$100", "$90", "$290"], correctAnswer: 3},
  {text: "Which is the deepest lake in the world?", answers:["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], correctAnswer: 3},
  {text: "What is the 2nd-most searched for topic on YouTube in 2014?", answers:["Minecraft", "Music", "Jaime Oliver", "Disney"], correctAnswer: 0},
  {text: "How many square feet do the Amazon offices cover?", answers:["More than 700 Madison Square gardens", "There ground can hold more water than 10,000 olympic pools", "Both A & B", "5,000 rugby fields"], correctAnswer: 2},
  {text: "Who invented the snowboard?", answers:["Doctor", "Skier", "Teacher", "Engineer"], correctAnswer: 3},
  ]
  // var q1 = Object.create(Question);
  // q1.text = "Where was the first G.A. headquarters and when was it established?";
  // q1.answers = ['New York, 2011', 'New York, 2013', 'New York, 2009', 'San Francisco, 2011'];
  // q1.correctAnswer = 0;
  // questionId1: 1;
  // this.questions.push(q1); 

  // var q2 = Object.create(Question);
  // q2.text = "How many campus's does G.A. have?";
  // q2.answers = ['10', '8', '14', '9'];
  // q2.correctAnswer = 2;
  // questionId1: 2;
  // this.questions.push(q2); 

  // var q3 = Object.create(Question);
  // q3.text = "What year was the google logo centered on its webpage?";
  // q3.answers = ['2004', '2003', '2001', '1996'];
  // q3.correctAnswer = 2;
  // questionId1: 3;
  // this.questions.push(q3); 

  // var q4 = Object.create(Question);
  // q4.text = "How much money does eBay make per second?";
  // q4.answers = ['$340', '$100', '$90', '$290'];
  // q4.correctAnswer = 3;
  // questionId1: 4;
  // this.questions.push(q4); 

  // var q5 = Object.create(Question);
  // q5.text = "Which is the deepest lake in the world?";
  // q5.answers = ['Lake Superior', 'Caspian Sea', 'Lake Victoria', 'Lake Baikal'];
  // q5.correctAnswer = 3;
  // questionId1: 5;
  // this.questions.push(q5); 


  //   var q6 = Object.create(Question);
  // q6.text = "What is the 2nd-most searched for topic on YouTube in 2014?";
  // q6.answers = ['Minecraft', 'Music', 'Jaime Oliver', 'Disney'];
  // q6.correctAnswer = 0;
  // questionId1: 6;
  // this.questions.push(q6); 


  //   var q7 = Object.create(Question);
  // q7.text = "How many square feet do the Amazon offices cover?";
  // q7.answers = ['More than 700 Madison Square gardens ', 'There ground can hold more water than 10,000 olympic pools', 'Both A & B', '5,000 rugby fields'];
  // q7.correctAnswer = 2;
  // questionId1: 7;
  // this.questions.push(q7); 
}



  //reference
  // for (var i = 0; i < 5; i++) {
  //   var q = Object.create(Question);
  //   q.text = 'My question ' + i;
  //   q.answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];
  //   q.correctAnswer = 2;
  //   this.questions.push(q);
  // }


  Game.displayCurrentQuestion = function() {
  // given that player 1 is always the first player 
  // if turn is an even number, then the question is for player 1

  this.turn++ // some number

  if (this.turn % 2) { //  player 2
    this.whichTurn = 2;
    //event.target.innerHTML = "It is Player Twos turn";
    Game.turnText.innerText = "It is Player Twos turn";
  } else {
    this.whichTurn = 1;
    //event.target.innerHTML = "It is Player Ones turn";
    Game.turnText.innerText = "It is Player Ones turn";
  }

  var currentQuestion = Game.questions[Game.currentQuestionIndex]; 
  document.getElementById("question").innerText = currentQuestion.text;
}

Game.displayCurrentAnswers = function() {
  var currentQuestion = Game.questions[Game.currentQuestionIndex]; 
  var answers = currentQuestion.answers;
  var buttons = document.getElementsByClassName("answerButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answers[i];
  }
}

  // var buttons = document.getElementsByClassName("answerButton");
  // for (var i = 0; i < buttons.length; i++) { 
  // }
  //document.getElementById("humanScore").innerText = game.playerScore;

  Game.isAnswerCorrect = function(answer) {
    var currentQuestion = Game.questions[Game.currentQuestionIndex];
    if (currentQuestion.correctAnswer == answer) {
      return true;
    } else {
      return false;
    }
  }

  Game.incrementScore = function() {
  if (this.turn % 2) { //  player 2
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
    // alert('WIN!');
    Game.incrementScore();
    // Game.playerOneScore++;
    // document.getElementById('playerOneScore').innerText = Game.playerOneScore;  

    // any questions left?
    Game.currentQuestionIndex++; //trying to go to new question
    if (Game.currentQuestionIndex < Game.questions.length) { //this checks if there is a new question
      Game.displayCurrentQuestion();
      Game.displayCurrentAnswers();
    } else {
      Game.checkWin();
    }
  } else {
     // alert('LOOSE ;(');
       Game.currentQuestionIndex++;
       console.log("currentIndex", Game.currentQuestionIndex, (Game.currentQuestionIndex < Game.questions.length) )
       if (Game.currentQuestionIndex <= Game.questions.length) {
         Game.displayCurrentQuestion(); 
         Game.displayCurrentAnswers();
       } else {
        Game.checkWin();
      }
    }
  }

  Game.checkWin = function() {
  if (this.playerOneScore == this.playerTwoScore) { // draw
  // Show on the screen that the current game is a draw
  Game.turnText.innerText = "Game over you both have tied - Goodluck splitting the money!";
} else if (this.playerOneScore > this.playerTwoScore) { 
  Game.turnText.innerText = "Game over, Player One won the game";
  // Show on the screen that playerone won
}
else { (this.playerTwoScore < this.playerOneScore)
  // Show on the screen that playertwo won
  Game.turnText.innerText = "Game over, Player Two won the game";
}
}




//More Notes

// var repeat = prompt("would you like to make anohter calculation? y/n")
// if(repeat === "n"){
//   alert("thank you for using my amzing calculator")
//   break;
// }

    // document.getElementById("humanScore").innerText = game.playerScore;
    // document.getElementById("computerScore").innerText = game.computerScore;

  // game.compMove();
  // game.checkWin();

// game.checkWin = function() {
//     if (game.playerMove === 'Good') {
//       if (game.computerMove === 'paper') {
//         game.computerScore++;
//       } else if (game.computerMove === 'scissors') { 
//         game.playerScore++;console.log("P");
//       } else {










