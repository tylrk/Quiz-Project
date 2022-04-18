import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    
    const quizElements = props.quiz.map(item => (
        <Question 
            key={item.id}
            question={item.question}
            answers={item.answers}
            correctAnswer={item.correctAnswer}
            selectedAnswer={item.selectedAnswer}
        />
    ))
    
    

    return (
        <div>
            {quizElements}
            
            <div className="footer">
                <button className="check-button" onClick={props.checkAnswers}>Check Answers</button>
            </div>
        </div>
        
        
    )
}