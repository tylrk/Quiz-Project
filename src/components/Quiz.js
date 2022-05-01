import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    
    const quizElements = props.quiz.map(item => (
        <Question 
            key={item.id}
            name={item.id}
            question={item.question}
            answers={item.answers}
            correctAnswer={item.correctAnswer}
            selectedAnswer={item.selectedAnswer}
            handleChange={props.handleChange}
            score={props.score}
        />
    ))
    
    

    return (
        <div>
            {quizElements}
            
            <div className="footer">
                {
                    (props.score === 0) &&
                <button className="check-button" 
                    onClick={props.checkAnswers}>Check Answers</button>
                }


                {
                    (props.score !== 0) &&
                    <>
                    <p className="result">
                        You scored {props.score}/{props.quiz.length} correct answers
                        </p>
                        <button className="check-button" onClick={props.playAgain}>Play again</button>
                    </>
                }
            </div>
        </div>
        
        
    )
}