import { useState } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';

function App() {
  const [totalRequiredTime, setTotalRequiredTime] = useState(0);
  let storeTime = totalRequiredTime;
  const addTotalTime = (exercise) => {
    setTotalRequiredTime(storeTime+= exercise.time);
    console.log(typeof exercise.time);
  }
  return (
    <div className="row bg-warning bg-opacity-50 m-0">
      <Main addTotalTime={addTotalTime}></Main>
      <Aside totalRequiredTime = {totalRequiredTime}></Aside>
    </div>
  );
}

export default App;
