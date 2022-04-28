import React from "react"
import {nanoid} from "nanoid"

export default function Question(props) {
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    const answerElements = props.answers.map(answer => {
        const id = nanoid()
        const isChecked = answer === props.selectedAnswer
        const isCorrect = answer === props.correctAnswer
                        
        const style = {
            backgroundColor: isCorrect ? "#94D7A2"
                : isChecked ? "#F8BCBC"
                : null,
            borderColor: (isCorrect || isChecked) ? "transparent" : null,
            opacity: !(isCorrect || isChecked) ? 0.5 : null
        }
        
        return (
            <div key={id}>
            
                <input
                    id={id}
                    type="radio"
                    className="answer"
                    value={answer}
                    name={props.name}
                    onChange={props.compileUserAnswers}
                    checked={isChecked}
                    disabled={props.score !== null}
                />
                
                <label
                    htmlFor={id}
                    className="answer-label"
                    style={ (props.score !== null) ? style : null }
                >
                    {decodeHtml(answer)}
                </label>
                
            </div>
        )
    })
    
    return (
        <div>
            <p className="question">{decodeHtml(props.question)}</p>
            <div className="answers">{answerElements}</div>
        </div>
    )
}