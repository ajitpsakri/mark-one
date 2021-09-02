let readlineSync = require('readline-sync');
const fs = require('fs')
let replit = require('replit')
let chalk = require('chalk')
let score = 0;

let userName = readlineSync.question("what is your name? ")
console.log(`Welcome ${chalk.bold(userName)} let's see how much you know about me`)
console.log(' ');
//---------------------data-----------------------
let aboutMe = [
	{
		question: "what is my favorite anime? ",
		answer: "avatar",
		fullAnswer: chalk.red("Wrong, My favorite anime is Avatar the last air bender")
	},
	{
		question: "which city do i live in? ",
		answer: "hubli",
		fullAnswer: chalk.red("Wrong, I live in Hubli(around 400km from bangalore) intresting thing about my city is every indian flag is made in hubli")
	},
	{
		question: "which is my favorite game? ",
		answer: "czero",
		fullAnswer: chalk.red("Wrong, my favorite game is czero(i like FPP games)")
	},
	{
		question: "which gun do i like in a game? ",
		answer: "sniper",
		fullAnswer: chalk.red("Wrong, my favorite gun is sniper(before coding i was obsessed with using double sniper in pubg)")
	}, {
		question: "What is my lucky number? ",
		answer: "9",
		fullAnswer: chalk.red("Wrong, My lucky number is 9")
	}
]
//--------------------------------------------------


const game = () => {
	for (let i = 0; i < aboutMe.length; i++) {
		currentQuestion = aboutMe[i].question;
		currentAnswer = aboutMe[i].answer;
		currentfullAnswer = aboutMe[i].fullAnswer;

		if (readlineSync.question(currentQuestion) === currentAnswer) {
			console.log(chalk.green("right!"));
			score++;
			console.log(' ')
		}
		else {
			console.log(currentfullAnswer);
			console.log(' ');
		}
	}
	console.log("Your score is " + chalk.blue.bold(score) + "/5")
	if (readlineSync.question("Type 'r' to play again ") === "r") {
		console.clear();
		game();
	}
}

const updateAndShowHighScore = (score, userName) => {
	//read
	const data = JSON.parse(fs.readFileSync('data.json'));
	//update
	data.push({
		name: userName,
		score: score,
	})
	let dataString = JSON.stringify(data, null, 2);
	fs.writeFileSync('data.json', dataString);
	//display
	let tempHighScoreData = [...data]
	let maxElementIndex = 0;
	if (tempHighScoreData.length < 5) {
		for (let i = 0; i < data.length; i++) {
			let max = tempHighScoreData[0].score;
			for (let j = 0; j < tempHighScoreData.length; j++) {
				if (tempHighScoreData[j].score > max) {
					max = tempHighScoreData[j].score;
					maxElementIndex = j
				} else {
					max = max;
				}
			}

			console.log(`High Score Rank ${i + 1}: ${tempHighScoreData[maxElementIndex].name} with score ${tempHighScoreData[maxElementIndex].score}`)
			tempHighScoreData.splice(maxElementIndex, 1)
		}
	} else {
		for (let i = 0; i < 5; i++) {
			let max = tempHighScoreData[0].score;
			for (let j = 0; j < tempHighScoreData.length; j++) {
				if (tempHighScoreData[j].score > max) {
					max = tempHighScoreData[j].score;
					maxElementIndex = j
				} else {
					max = max;
				}
			}
			console.log(`High Score Rank ${i + 1}: ${tempHighScoreData[maxElementIndex].name} with score ${tempHighScoreData[maxElementIndex].score}`)
				tempHighScoreData.splice(maxElementIndex, 1)
		}
	}
}
	//main
	game();
	updateAndShowHighScore(score, userName);
