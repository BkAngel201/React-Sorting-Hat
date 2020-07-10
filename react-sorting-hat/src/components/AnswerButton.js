import React from 'react';

function AnswerButton(props) {
    return (
    <button onClick={() => {props.updateAnswerValue(props.value)}}>{props.text}</button>
    )
}

export default AnswerButton