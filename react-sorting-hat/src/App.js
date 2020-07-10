import React, { useState } from 'react';
import data from "./data"
import Welcome from './components/Welcome'
import SortingProcess from './components/SortingProcess'
import HouseAssignation from './components/HouseAssignation'
import { Switch, Route } from 'react-router-dom'


function App() {
  const [answerValue, setAnswerValue] = useState(0)


  return (
    <div className="app">
      <Switch>
        <Route path="/sortingProcess">
          <SortingProcess questions={data.questions} answerValue={answerValue} setAnswerValue={setAnswerValue} />
        </Route>
        <Route path="/houseAssignation">
          <HouseAssignation answerValue={answerValue} houses={data.houseInfo}/>
        </Route>
        <Route path="/">
          <Welcome welcomeMessage={data.welcomeMessage} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
