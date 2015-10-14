# WDI-PROJECT-ONE 
<br>
###Who Wants To Be A Millionaire 
This application is based on 'my own take' of the infamous television show "Who wants to be a Millionaire". <br> Starting with easy multiple-choice questions that gradually get more challenging as the game continues. There will be two users competing to win the grand prize of 'one million dollars'.
<br>

###Project link
<https://polar-wave-3586.herokuapp.com/>,

###Question format
The question bank is organised in an array of "themes". You can have as many "themes" as you like- currently there is three. The users will select these at the opening page.

My array of questions is organised in the following format
<br>
"tech": [ <br>
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0}, <br>
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0}, <br>
  {text: "questions", answers:["...", "....", "....", "..."], correctAnswer: 0}, <br>
   ], <br>
} <br>

"Answers" is the content for all the possible answers. <br>
"Answers" must have at least 4 multiple choices. <br>
"Text" is the prompt for the question. <br>
"correctAnswer" refers to which answer is the correct one amongst the array. <br>

####For example: 
{text: "Where was the first G.A. headquarters and when was it established?", <br>
answers:["New York, 2011", "New York, 2013", "New York, 2009", "San Francisco, 2011"], <br>
correctAnswer: 0}, <br>
<br>

###Question bank
To make question harvesting easier, I had a root directory of 'questions'. All my different themes and their questions are stored in a serperate file 'questions.js'- this allows you to have as many questions and themes as you'd like. 
<br>

###Visual of Game 
![image](http://i.imgur.com/a2Qrhqo.jpg)
<br>
![image](http://i.imgur.com/L8IIO3m.png)
<br>

###Chosen Materials:
The sounds and images used for Who Wants to Be a Millionaire, are not mine nor do I claim any involvement in their creation. The materials are used under Fair Use for academic and educational purpose, and should not be redistributed otherwise without permission from their creators.
<br>


###Improvements 
Pending improvment: need to make it responsive - over all devices.

![image](http://i.imgur.com/rT3E3TM.png)
