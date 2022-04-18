import React, {useState, useEffect} from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import Quiz from "./components/Quiz"
import {nanoid} from "nanoid"

export default function App() {
    const [begin, setBegin] = useState(false)
    const [count, setCount] = useState(0)
    const [quiz, setQuiz] = React.useState([{
        question: "",
        answers: "",
        correctAnswer: "",
        selectedAnswer: "",
        id: "",
        score: 0
    }])
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => {
           setQuiz(data.results.map(item => ({
                question: item.question,
                answers: [item.correct_answer, ...item.incorrect_answers]
                            .sort(() => Math.random() - 0.5),
                correctAnswer: item.correct_answer,
                selectedAnswer: "",
                id: nanoid()
            })))
        })
    }, [begin])
    
   /* function checkAnswers() {
        const correctAnswers = quiz.map(item => item.correctAnswer)
        const userAnswers = quiz.map(item => item.selectedAnswer)
        
        let score = 0
        for(let i = 0; i < quiz.answers.length; i++) {
            if(userAnswer[i] === correctAnswer[i]) {
                score++
            }
        }
        setQuiz(prev => ({
            ...prev,
            score: score
        }))
    } */
    
    
    function startQuiz() {
        setBegin(true)
    }
    
    
    return(
        <main className="container">
            {!begin &&
                <Start 
                    startQuiz={startQuiz} 
                />}
            {begin && 
                <Quiz 
                    quiz={quiz}
                    //checkAnswers={checkAnswers}
                />}
        
        
        </main>
    )
}