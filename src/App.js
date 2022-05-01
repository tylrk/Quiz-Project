import React, {useState, useEffect} from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import {nanoid} from "nanoid"

export default function App() {
    const [begin, setBegin] = useState(false)
    const [count, setCount] = useState(() => 0)
    const [score, setScore] = useState(null) 
    const [quiz, setQuiz] = useState([])
    
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
    }, [count])

     function startQuiz() {
        setBegin(true)
    }
    
    function handleChange(event) {
        const newArray = []
        const {name, value} = event.target
       
        quiz.forEach(item => {
            if (item.id === name) {
                item = {
                    ...item,
                    selectedAnswer: value
                }
                newArray.push(item)
            } else {
                newArray.push(item)
            }
        })
        setQuiz(newArray)
    }

    function checkAnswers() {
        const correctAnswers = quiz.map(item => item.correctAnswer)
        const userAnswers = quiz.map(item => item.selectedAnswer)
        
        let score = 0
        for(let i = 0; i < correctAnswers.length; i++) {
            if(userAnswers[i] === correctAnswers[i]) {
                score++
            }
        }
        setScore(score)
    } 
   
    function playAgain() {
        setCount(prev => prev + 1)
        setBegin(prev => !prev)
        setScore(null)
        setQuiz([])
    }

    console.log(quiz)
    
    return(
        <main className="container">
            {!begin &&
                <Start 
                    startQuiz={startQuiz} 
                />}
            {begin && 
                <Quiz 
                    quiz={quiz}
                    checkAnswers={checkAnswers}
                    handleChange={handleChange}
                    score={score}
                    playAgain={playAgain}
                />}
        
        
        </main>
    )
}