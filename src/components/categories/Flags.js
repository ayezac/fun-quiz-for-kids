import React, { useState } from 'react';
import '../styles/style.css';
import flagsQuizData from '../../quizData/flagQuizData';
import QuestionContainer from '../QuestionContainer';

const Flags = () => {

    const [started, setStarted] =useState(false);

    const handleStart = () => {
        setStarted(true);
    }
    const picture = true;
    const categoryQuestion = 'Identify the country through the flag'
   
    return(
        <div className="quiz-container">
            <h1>FLAGS</h1>
         {!started &&(  
            <button id="start-button" onClick={handleStart}>START</button>
            )} 
        {started &&
        (<div>
            <QuestionContainer picture={picture} quizData={flagsQuizData} categoryQuestion={categoryQuestion}/>
        </div>)}
        </div>
    )
}

export default Flags;