let readlineSync = require('readline-sync');
let replit = require('replit')
let chalk  = require('chalk')
let score  = 0;

let userName = readlineSync.question("what is your name? ")
console.log(`Welcome ${chalk.bold(userName)} let's see how much you know about me`)
console.log(' ');


//---------------------data-----------------------
let aboutMe =[
  {
    question:"what is my favorite anime? ",
    answer:"avatar",
    fullAnswer:chalk.red("Wrong, My favorite anime is Avatar the last air bender")
  },
  {
    question:"which city do i live in? ",
    answer:"hubli",
    fullAnswer:chalk.red("Wrong, I live in Hubli(around 400km from bangalore) intresting thing about my city is every indian flag is made in hubli")
  },
  {
    question:"which is my favorite game? ",
    answer:"czero",
    fullAnswer:chalk.red("Wrong, my favorite game is czero(i like FPP games)")
  },
  {
    question:"which gun do i like in a game? ",
    answer:"sniper",
    fullAnswer:chalk.red("Wrong, my favorite gun is sniper(before coding i was obsessed with using double sniper in pubg)")
  }
]
//--------------------------------------------------


const game = ()=>{
  for(let i=0;i<aboutMe.length;i++){
    currentQuestion   =   aboutMe[i].question;
    currentAnswer     =   aboutMe[i].answer;
    currentfullAnswer =   aboutMe[i].fullAnswer;

    if(readlineSync.question(currentQuestion)===currentAnswer){
     console.log(chalk.green("right!"));
     score++;
     console.log(' ')
    }
    else {
      console.log(currentfullAnswer);
      console.log(' ');}
   }
    console.log("Your score is "+ chalk.blue.bold(score))
    if(readlineSync.question("Type 'r' to play again ")==="r") {
      console.clear();
      game();
    } 
}
//---------------------------------------------------
game();
