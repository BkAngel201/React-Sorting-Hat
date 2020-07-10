import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton'
import { useHistory } from 'react-router-dom'

function SortingProcess(props) {
    const [actualQuestion, setActualQuestion] = useState(0)
    const history = useHistory();
    
    const updateAnswerValue = (newValue) => {
        props.setAnswerValue(props.answerValue + newValue)
        setActualQuestion(actualQuestion + 1)
        if(actualQuestion + 1 === 6) {
            history.push('/houseAssignation')
        }
    }

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
      }

    return (
        <div className="question">
            <p>{props.questions[actualQuestion].question}</p>
            {shuffle(props.questions[actualQuestion].possibleAnswers).map(item => {
                return <AnswerButton text={item.text} value={item.value} updateAnswerValue={updateAnswerValue}/>
            })}
        </div>
    )
}

export default SortingProcess