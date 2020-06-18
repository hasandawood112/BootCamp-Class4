import React, { useState } from 'react';
import './App.css';
import StudentDetails from './studentdetails';


function App() {

  let [count, setCount] = useState(0);
  let [isDark, setDark] = useState(true);

  return (
    <div className={`lightTheme ${isDark ? 'darkTheme' : ''}`}>

      <h1>Theme : {isDark ? 'Dark' : 'Light'}</h1>
      <button onClick={() => setDark(!isDark)}>change theme</button>

      <hr />

      <h1>Value of counter variable is : {count}</h1>
      <div>
        <button onClick={
          () => setCount(++count)
        }>
          Increase
          </button>

        <button onClick={
          () => setCount(--count)
        }>
          Decrease
          </button>

        <button onClick={
          () => setCount(count - count)
        }>
          Reset
          </button>
      </div>

      <hr />

      <StudentDetails name="Hasan Dawood" Fname="Hasan Adil" course="BootCamp2020" age="21" />

    </div>
  );
}

export default App;
