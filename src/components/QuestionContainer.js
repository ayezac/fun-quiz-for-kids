import React, { useState } from 'react';
import './styles/questionContainer.css';
import CheckAnswer from './CheckAnswer';
import Results from './Results';

const QuestionContainer = (props) => {
    const [index, setNextIndex] = useState(0)
    const [question, setQuestion] = useState(props.quizData[index]);
    const [givenAnswer, setGivenAnswer] = useState('');
    const [result, setResult] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [getResults, setGetResults] = useState(false);

    const quizLength = props.quizData.length;

    const handleClick = () => {
        setCorrect(false);
        setWrong(false);
        //first check answer and set result
        givenAnswer.toLocaleLowerCase()===question.correctAnswer && setResult(result + 1)
        //then reset input area
        setGivenAnswer('');
        //then go to next question if it exists
        if(index<(props.quizData.length-1)) {
            setNextIndex(index+1); 
            setQuestion(props.quizData[index + 1]);
        }
        //once last question is reached, show results
        else if (index===(props.quizData.length-1)){
            setNextIndex(index+1);
        }
    }

    const handleChange = e => {
        setCorrect(false);
        setWrong(false);
        setGivenAnswer(e.target.value)
    }

    const checkAnswer=()=>{
        givenAnswer.toLocaleLowerCase()===question.correctAnswer && setCorrect(true);
        givenAnswer.toLocaleLowerCase()!==question.correctAnswer && setWrong(true);
    }

    const handleCheck =()=>{
checkAnswer();
       
    }
    const handleGetResults=()=>{
        setGetResults(true);
    }


    return(
        <div>
            <CheckAnswer  correct={correct} wrong={wrong}/>
            {!getResults && (
                <div>
                    <h2 className="question">{props.categoryQuestion}</h2>
                    <div id="container">
                        {index<props.quizData.length && (
                    <div id='question-container'> 
                        {props.picture ===false && <h3 className="questions">{question.question}</h3>}
                        {props.picture && <img src = {question.question} alt='flags' id="flag"/>}
                        <input type="text" onChange={handleChange} value ={givenAnswer} id="answer"/>
                        <div className='button-container'>
                            <button onClick={handleClick} className='button'>Next</button> 
                            <button onClick={handleCheck} className='button'>Check</button> 
                        </div>
                    </div>  
                    )} 
                    {index===props.quizData.length && (
                        <button type="button" onClick={handleGetResults} className="button" id="results">Get Results</button> 
                    )}    
                    </div> 
                </div>
        )}
        {getResults && (
        <Results result={result} quizLength={quizLength} />
        )}
   
    </div>
    )
}

export default QuestionContainer;