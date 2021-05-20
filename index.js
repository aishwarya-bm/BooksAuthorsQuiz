var readlinesync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var trackScores = [];
const error = chalk.bold.red;
const right = chalk.bold.green;
var questions = [
  question1 = {
   question : "Q1. Who wrote the famous book - 'We the people'?\nA.	T.N.Kaul\nB.	J.R.D. Tata\nC.	Khushwant Singh\nD.	Nani Palkhivala\n",
    answer : "D"
  },
  question2 = {
   question : "Q2. Who is the author of the book 'Nineteen Eighty Four'?\nA.	Thomas Hardy\nB.	Emile Zola\nC.	George Orwell\nD.	Walter Scott\n",
    answer : "C"
  },
  question3 ={
    question : "3. Who wrote the line- 'A thing of beauty is a joy forever'?\nA.	John Keats\nB.	Robert Browing\nC.	P.B.Shelley\nD.	William Wordsworth\n",
    answer : "A"
  },
  question4 ={
    question : "Q4. Who is the author of famous statement: 'That Government is the best which governs least'?\nA.	Herbert Spencer\nB.	Harold Laski\nC.	Alexis De Tocqueville\nD.	Henry David Thoreau\n",
    answer : "D"
  },
question5 ={
    question : "Q5. 'Eight Lives' is a book written by?\nA.	Raja Ramana\nB.	Savita Ambedkar\nC.	Mahesh Yogi\nD.	Raj Mohan Gandhi\n",
    answer : "D"
  }
]
function play(){
for(var i =0; i < questions.length; i++)
{
  var currQuestion = questions[i];
  var ans = readlinesync.question(chalk.yellowBright(currQuestion.question));
  if(ans.toLowerCase() === currQuestion.answer.toLowerCase())
  {
    score = score + 5;
    console.log("You entered ",ans.toUpperCase());
    console.log(right("Yay, you are right!"));
  }
  else
  {
    console.log("You entered ",ans.toUpperCase());
    console.log(error("Oops, you are wrong!"));
  }
  console.log(chalk.bgMagenta("Your score is ",score));
  console.log(chalk.yellow("**************************"));
}
}

function maxScore()
{
  return Math.max(...trackScores);
}

function playGame()
{
  var doPlay = 'y';
  while(doPlay === 'y' || doPlay === 'Y')
  {   
    score = 0;
    play();
    console.log(chalk.bgCyan.bold("Your final score is ",score, "!!!"));
    console.log(chalk.yellow("**************************"));
    trackScores.push(score);
    console.log("Your max score is ",maxScore());
    doPlay = readlinesync.question("Do you want to play again?y/n?\n");
    
  }
}
var username = readlinesync.question(chalk.black.bgGreen("Welcome to the Books n Authors quiz!!! \nPlease tell us your name\n"))
console.log(chalk.bold.red("Hi ",chalk.green(username), ", lets check the rules before we begin the game."))
console.log(chalk.bold.red("Lets play a fun game where you have to find the author of books.\n1.The correct answer will give you 5 points.\n2.The wrong answer will give you 0 points.\n3.You can answer with the choice as a/b/c/d or A/B/C/D.\nLets begin the fun!!!"));
console.log(chalk.yellow("**************************"));
playGame();