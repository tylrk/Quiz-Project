import React from "react"

export default function Start(props) {
    return(
        <div className="start-page" hidden={props.isHidden}>
            <h1 className="start-title">Quizzical</h1>
            <p className="start-sub">Test your knowledge!</p>
            <button className="start-button" onClick={props.startQuiz}>Start quiz</button>
        </div>
        
    )
}