import React, {useState} from 'react';

import CustomButton from './components/custom-button/custom-button.component'

import './App.scss';

function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		}
	]

	const [currentQuestion, setCurrentQuestion] = useState(0),
		  [showScoreCard, setShowScoreCard] = useState(false),
		  [score, setScore] = useState(0)

	const handleAnswerClick = answerIsCorrect => {
		const nextQuestion = currentQuestion + 1;

		if(answerIsCorrect){
			setScore(score + 1)
		}
		
		if (nextQuestion >= questions.length){
			setShowScoreCard(true)
		} else {
			setCurrentQuestion(nextQuestion)
		}
	}

	const closeScoreCard = () => setShowScoreCard(false)

	const resetQuiz = () => {
		setCurrentQuestion(0)
		setShowScoreCard(false)
		setScore(0)
	}

	return (
		<div className="quiz-app">
			{
				showScoreCard ?
				<dialog className="score-card">
					
					{/**/}
					<div onClick={closeScoreCard} className="close-score-card" role="button">
						&#10005;

						<span className="visually-hidden">Close score card</span>
					</div>

					<p>You got {score} questions correct out of {questions.length}.</p>

					<CustomButton primary onClick={resetQuiz}>Try again</CustomButton>
				</dialog> :

				<div className="question-container">
					<section className="question">
						<div className="question-count">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>

						<div className="question-txt">{questions[currentQuestion].questionText}</div>
					</section>

					<section className="answers">
						{
							questions[currentQuestion].answerOptions.map(option => <CustomButton onClick={() => handleAnswerClick(option.isCorrect)} primary>{option.answerText}</CustomButton>)
						}
					</section>
				</div>
			}
		</div>
  	);
}

export default App;
