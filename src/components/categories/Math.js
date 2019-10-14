import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/questionContainer.css';
import mathQuizData from '../../quizData/mathQuizData';
import QuestionContainer from '../QuestionContainer';

const Math = () => {

    const [started, setStarted] =useState(false);

    const handleStart = () => {
        setStarted(true);
    }
    const picture = false
   
    return(
        <div className="quiz-container">
            <h1 id="math-title">MATHEMATICS</h1>
         {!started &&(  
            <button id="start-button" onClick={handleStart}>START</button>
            )} 
        {started &&
        (<div>
            <QuestionContainer picture={picture} quizData={mathQuizData}/>
        </div>)}
        </div>
    )
}

export default Math;