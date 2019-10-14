import React from 'react';
import './styles/questionContainer.css';


const CheckAnswer = (props) => {
    return(
        <div >
            <div>
                {props.correct && <div className='check' id="correct">Correct</div>}
                {props.wrong && <div className='check' id="wrong">Wrong</div>}
            </div>
        </div>
    )
}

export default CheckAnswer;