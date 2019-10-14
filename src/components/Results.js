import React from 'react';
import './styles/questionContainer.css';

const Results = (props) => {
    return(
        <div id='results-container'>
            <h1>You scored</h1>
            <h1>{props.result}/{props.quizLength}</h1>
        </div>
    )
}

export default Results;