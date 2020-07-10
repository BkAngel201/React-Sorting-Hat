import React from 'react';
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <div className="welcome">
            <p>{props.welcomeMessage}</p>
            <Link to="/sortingProcess">Go to Selection Process</Link>
        </div>
    )
    
}

export default Welcome