// Your code here

var questionsArr = [
	{
		question: `The letter "T" is the most common in the English Language`,
		answer: false
	},
	{
		question: `Dr. Pepper is the oldest soft drink in America`,
		answer: true
	},
	{
		question: `The letter "J" is the only letter in the alphabet not included in the periodic table`,
		answer: true
	},
	{
		question: `Every country in the world has a rectangular flag`,
		answer: false
	},
	{
		question: `All the kings in a standard deck of playing cards have mustaches`,
		answer: false
	},
	{
		question: `Ears of corn have an even number of rows`,
		answer: true
	}
];

function runQuiz() {
	let answerArr = [];

	for (let i = 0; i < questionsArr.length; i++) {
		let question = confirm(questionsArr[i].question);
		let answer = questionsArr[i].answer;

		if (question === answer) {
			answerArr.push(answer);
		}
	}

	let score = Math.round((answerArr.length / questionsArr.length) * 100);

	alert(`Your score is ${score}%`);
}
