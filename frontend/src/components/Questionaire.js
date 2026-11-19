import React from 'react'

import Answer from './Answer'

import Header from './Header.jsx'
import Question from './Question.jsx'

const Questionaire = ({
    showAnswers,
    currentIndex,
    handleAnswer,
    data: { question, correct_answer, answers, imageUrl },
})=>{
    
    return(
        <div>
            <Header />
            <div className="quizRow">
                <Question
                    QuizNo={currentIndex}
                    question={question}
                    imageUrl={imageUrl}
                />
            </div>
            <div className="quizRow">
                <Answer
                    onClick={() => handleAnswer(answers[0])}
                    cls = {showAnswers ? correct_answer === answers[0] ? 'correct_answer' : 'incorrect_answer' : 'answerBtn'}
                    answer={answers[0]}
                />
                <Answer
                    onClick={() => handleAnswer(answers[1])}
                    cls = {showAnswers ? correct_answer === answers[1] ? 'correct_answer' : 'incorrect_answer' : 'answerBtn'}
                    answer={answers[1]}
                />
            </div>
            <div className="quizRow">
                <Answer
                    onClick={() => handleAnswer(answers[2])}
                    cls = {showAnswers ? correct_answer === answers[2] ? 'correct_answer' : 'incorrect_answer' : 'answerBtn'}
                    answer={answers[2]}
                />
                <Answer
                    onClick={() => handleAnswer(answers[3])}
                    cls = {showAnswers ? correct_answer === answers[3] ? 'correct_answer' : 'incorrect_answer' : 'answerBtn'}
                    answer={answers[3]}
                />
            </div>
        </div>
    )
};
export default Questionaire;