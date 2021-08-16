var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + ", to the quiz about Michael Phelps?");
  
  
  
  
var questions = [{
  question: "What sport does Michael play? ",
  answer: "Swimming"
},
{
  question: "How many Olympic medal did Michael won? ",
  answer: "28"
},
{
  question: "What is his height ?",
  answer: "1.98m"
},
{
  question: "In which year, he made his debut?",
  answer : "2004"
},
{
  question:"Best ever Olympic performance?",
  answer: "8 Gold"

}
];




function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
  }
  else {
    console.log("Oops, Wrong!");
  }
  console.log( userName + ", your current score is: ", score);
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log( userName + " your final score is : ", score);
}

game();
showScores();
