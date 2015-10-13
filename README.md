# WDI-PROJECT-ONE 


###Who Wants To Be A Millionaire: 
This application is based on 'my own take' of the infamous television show "Who wants to be a Millionaire". Starting with easy multiple-choice questions that gradually get more challenging as the game continues. There will be two users competing to win the grand prize of 'one million dollars'.

Question format:
The question bank is organised in an array of "themes". You can have as many "themes" as you like. You select them at the opening page.


Question bank:
To make question harvesting easier, I had a root directory of 'questions'. All my different themes and their questions are stored in a serperate file questions.js. The program reads the question set from questions.js


My array of questions is organised in the following format

"tech": [
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0},
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0},
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0},
  ],
}

"Answers" is the content for possible answers. "Answers" must have a least 4 multiple choices. 
"Text" is the prompt for the question. 
"correctAnswer" refers to which answer is the correct one amongst the array. 

For example: 

{text: "Where was the first G.A. headquarters and when was it established?", 
answers:["New York, 2011", "New York, 2013", "New York, 2009", "San Francisco, 2011"], 
correctAnswer: 0},

![image](http://i.imgur.com/a2Qrhqo.jpg)

Who Wants to Be a Millionaire Materials:

The sounds and images used for Who Wants to Be a Millionaire, are not mine nor do I claim any involvement in their creation. The materials are used under Fair Use for academic and educational purpose, and should not be redistributed otherwise without permission from their creators.
