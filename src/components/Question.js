import React from "react"
import {nanoid} from "nanoid"

export default function Question(props) {
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    const answerElements = props.answers.map(answer => (
        <div key={nanoid()}>
            <button type="radio" className="answer-label">{decodeHtml(answer)}</button>
        </div>
    ))
    
    return (
        <div>
            <p className="question">{decodeHtml(props.question)}</p>
            <div className="answers">{answerElements}</div>
        </div>
    )
}