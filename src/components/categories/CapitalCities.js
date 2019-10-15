import React, { useState } from 'react';
import '../styles/style.css';
import capitalCitiesQuiz from '../../quizData/capitalCitiesQuizData';
import QuestionContainer from '../QuestionContainer';

const CapitalCities = () => {

    const [started, setStarted] =useState(false);

    const handleStart = () => {
        setStarted(true);
    }
    const picture = false;

    const categoryQuestion='Name the capital city of:';
   
    return(
        <div className="quiz-container">
            <h1>CAPITAL CITIES</h1>
         {!started &&(  
            <button id="start-button" onClick={handleStart}>START</button>
            )} 
        {started &&
        (<div>
            <QuestionContainer picture={picture} quizData={capitalCitiesQuiz} categoryQuestion={categoryQuestion}/>
        </div>)}
        </div>
    )
}

export default CapitalCities;